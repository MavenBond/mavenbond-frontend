import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import Image from "next/image";
import Router from "next/router";
import { _executeSchema } from "pages/login";
import { CUSTOMER_FORM_MODEL, FALLBACK_PROFILE_URL, PROFILE_ZOD_MODEL } from "projConstants";
import type { ChangeEventHandler } from "react";
import { useEffect, useState } from "react";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { TailSpin } from "react-loader-spinner";
import { ROUTES } from "routes";
import ProfileStyles from "styles/Profile.module.css";
import { supabaseClient, updateUserData } from "supabase/supbaseClient";
import { angry, happy, tasty } from "utils/toaster";
import { undefined } from "zod";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const Button = dynamic(() => import("components/common/Button"));

// download image from storage if account has no profile pic from Google
export const downloadImage = async (path: string, callback: (imgUrl: string) => void) => {
  try {
    const { data: downloadImgData, error: downloadImgError } = await supabaseClient.storage
      .from("avatars")
      .download(path);
    if (downloadImgError) console.log(downloadImgError.message);
    else {
      const imgUrl = URL.createObjectURL(downloadImgData);
      callback(imgUrl);
    }
  } catch (error) {
    console.log(`Error downloading image: ${error}`);
  }
};

const Profile = () => {
  const { PROFILE } = ROUTES;
  const { description } = PROFILE;
  const { profile } = useAuth();
  const { register, handleSubmit, watch } = useForm(); // react-hook-form methods

  // init states
  const INIT_AVATAR_URL = profile?.avatar_url as string;
  const PROFILE_INIT_VALUES: Record<string, string> = {
    email: profile?.email as string,
    full_name: profile?.full_name as string,
    new_password: "",
    confirm_password: "",
    phone: "",
    country: "",
    city: "",
  };

  // form states
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const [avatarExt, setAvatarExt] = useState<string>(".png");
  const [avatarUrl, setAvatarUrl] = useState<string>(INIT_AVATAR_URL);
  const [avatarTempUrl, setAvatarTempUrl] = useState<string>("");
  const [avatarRawFile, setAvatarRawFile] = useState<File>();

  const [hasNoChanges, setHasNoChanges] = useState<boolean>(true);
  const [isDownloading, setIsDownloading] = useState<boolean>(true);
  const [hasNoPwdChanges, setNoPwdChanges] = useState<boolean>(true);

  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);

  // detect changes, ONLY enable submit when there is changes
  useEffect(() => {
    const _isShallowEqual = (obj1: Record<string, string>, obj2: Record<string, string>) => {
      return Object.keys(obj1)
        .map((k) => {
          if (typeof obj1[k] === "string" && typeof obj2[k] === "string")
            return obj1[k].trim() === obj2[k].trim();
          return obj1[k] === obj2[k];
        })
        .every((item) => item === true);
    };

    const subscription = watch((value) => {
      const changesCheck = _isShallowEqual(PROFILE_INIT_VALUES, value);
      setHasNoChanges(changesCheck);
      setNoPwdChanges(value.new_password === PROFILE_INIT_VALUES.new_password);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (INIT_AVATAR_URL && !INIT_AVATAR_URL.startsWith("http"))
      downloadImage(INIT_AVATAR_URL, (imgUrl) => {
        setAvatarUrl(imgUrl);
        setDownloadUrl(imgUrl);
        setIsDownloading(false);
      });
    else setIsDownloading(false);
  }, [INIT_AVATAR_URL]);

  // when a photo file is changed
  const handlePhotoFileChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    try {
      // start uploading photo file
      setIsUploading(true);

      // if cancelled
      if (!event.target.files || event.target.files.length === 0) {
        setAvatarUrl(downloadUrl || profile?.avatar_url || FALLBACK_PROFILE_URL);
        tasty("Removed chosen photo.");
        setAvatarTempUrl("");
        setHasNoChanges(true);
        return;
      }

      // get the first file
      const file = event.target.files[0];
      setAvatarRawFile(file);
      setHasNoChanges(false);

      // update HOLDING avatar url with file path
      setAvatarTempUrl(URL.createObjectURL(file)); // important
      tasty("Uploaded chosen photo.");

      // handle file name for later uploading to Supabase
      const fileExt = file.name.split(".").pop();
      setAvatarExt(fileExt as string);
    } catch (error) {
      console.log(`${error}`);
    } finally {
      setIsUploading(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _updateWithSchema = async (executedSchema: any) => {
    // update PROFILES basic info
    const { email, new_password, full_name } = executedSchema.data;
    const { error: updateDbError } = await supabaseClient
      .from("profiles")
      .update({ full_name, email, avatar_url: `${profile?.id}.${avatarExt}` })
      .eq("id", profile?.id);

    // update PROFILES critical info
    const { error: updateAccError } = await updateUserData({
      email: email || undefined,
      password: new_password || undefined,
    });

    // remove old avatar from STORAGE
    const { error: removeError } = await supabaseClient.storage
      .from("avatars")
      .remove([profile?.avatar_url as string]);

    // upload new avatar from STORAGE
    const { error: uploadError } = await supabaseClient.storage
      .from("avatars")
      .upload(`${profile?.id}.${avatarExt}`, avatarRawFile as File, {
        upsert: true,
      });

    if (uploadError || removeError || updateDbError || updateAccError) {
      // if error, toast error
      angry("Error updating profile. Try again later");

      // reset submitting state
      setIsSubmitting(false);
      return;
    }

    // if no error, toast msg
    const happyMsg = `Profile updated`;
    happy(happyMsg);

    // mark success state
    setIsSubmitting(false);
    setUpdateSuccess(true);

    // reload
    setTimeout(() => {
      Router.reload();
    }, 1000);
  };

  // update submit handler
  const handleSubmitData = async (data: FieldValues) => {
    setIsSubmitting(true);

    const [isGood, executedSchema] = _executeSchema(PROFILE_ZOD_MODEL, data, undefined);
    if (isGood) _updateWithSchema(executedSchema);
  };

  return (
    <>
      <Helmet title={description} description={description} />
      <main className='pageContainer scrollbar-hide'>
        <Navbar />
        <div
          className='flex items-center justify-center
          h-screen max-w-4xl mx-auto'
        >
          <form
            onSubmit={handleSubmit((data: FieldValues) => handleSubmitData(data))}
            className={ProfileStyles.formContainer}
          >
            {isDownloading && (
              <TailSpin
                height='100'
                width='100'
                color='#f59e0b'
                ariaLabel='tail-spin-loading'
                radius='2'
                wrapperStyle={{}}
                wrapperClass='self-center'
                visible={true}
              />
            )}
            {!isDownloading && (
              <div>
                <div className='relative w-32 h-32'>
                  <Image
                    fill
                    priority
                    src={avatarTempUrl || avatarUrl || FALLBACK_PROFILE_URL}
                    alt='Profile: preview profile image'
                    className={ProfileStyles.photoPreview}
                    sizes='(max-width: 768px) 300px,
                    (max-width: 1200px) 400px'
                  />
                </div>
              </div>
            )}
            <label className='input-group-md w-full text-right'>
              <span className='font-bold'>Profile Photo</span>
              <div
                className='tooltip w-full'
                data-tip={
                  "To remove previous selection, hit 'CHOOSE FILE' again and hit 'Cancel' button to close mini window"
                }
              >
                <input
                  onChange={handlePhotoFileChange}
                  disabled={isUploading || isSubmitting || updateSuccess}
                  id='avatarUrl'
                  accept='image/*'
                  type='file'
                  className='file-input file-input-bordered file-input-primary w-full'
                />
              </div>
            </label>
            {[...CUSTOMER_FORM_MODEL].map(
              ({ id, label, type, required, placeholder, registerAs, tooltip }) => (
                <label key={id} htmlFor={id} className='input-group-md w-full text-right'>
                  <span className='font-bold'>{label}</span>
                  <div className='tooltip w-full' data-tip={id === "email" ? tooltip : label}>
                    <input
                      {...register(registerAs, {
                        setValueAs: (v) => (v ? v.trim() : v),
                      })}
                      defaultValue={PROFILE_INIT_VALUES[id]}
                      required={required}
                      disabled={isSubmitting || updateSuccess}
                      id={registerAs}
                      type={type}
                      placeholder={placeholder}
                      className='input input-bordered input-primary w-full'
                    />
                  </div>
                </label>
              )
            )}

            {!hasNoPwdChanges && !updateSuccess && (
              <label
                key='confirm_password'
                htmlFor='confirm_password'
                className='input-group-md w-full text-right'
              >
                <span className='font-bold'>
                  Confirm Password <span className='text-red-400'>*</span>
                </span>
                <input
                  defaultValue=''
                  required={!hasNoPwdChanges}
                  disabled={isSubmitting || updateSuccess}
                  id='confirm_password'
                  type='password'
                  placeholder='Confirm your new password'
                  className='input input-bordered input-primary w-full'
                  {...register("confirm_password")}
                />
              </label>
            )}

            <Button
              disabled={hasNoChanges}
              className={`${ProfileStyles.updateBtn} ${
                hasNoChanges ? "bg-gray-400" : "bg-amber-500"
              }`}
            >
              UPDATE
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Profile;
