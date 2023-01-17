import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import Router from "next/router";
import {
  BUSINESS_FORM_MODEL,
  CUSTOMER_FORM_MODEL,
  FALLBACK_PROFILE_URL,
  INFLUENCER_FORM_MODEL,
  PROFILE_ZOD_MODEL,
} from "projConstants";
import { ChangeEventHandler, useEffect, useReducer, useState } from "react";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import ProfileStyles from "styles/Profile.module.css";
import { supabaseClient, updateUserData } from "supabase/supbaseClient";
import { _isShallowEqual } from "utils/obj";
import { angry, happy, tasty } from "utils/toaster";
import api from "api";

const Button = dynamic(() => import("components/common/Button"));
const ProfileImageInput = dynamic(() => import("components/bypage/ProfileImageInput"));
type FormStateType = Record<string, string | boolean | File | undefined>;

const ProfileForm = () => {
  const { profile } = useAuth();
  const { register, handleSubmit, watch } = useForm(); // react-hook-form methods

  // form states
  const INIT_AVATAR_URL = profile?.avatar_url as string;
  const FORM_INIT_STATE: FormStateType = {
    downloadUrl: "",
    avatarExt: "png",
    avatarUrl: INIT_AVATAR_URL,
    avatarTempUrl: "",
    avatarRawFile: undefined,

    hasNoChanges: true,
    isDownloading: true,
    hasNoPwdChanges: true,

    isUploading: false,
    isSubmitting: false,
    updateSuccess: false,
  };

  // form states reducer
  const [formState, setFormState] = useReducer(
    (formState: FormStateType, newFormStates: FormStateType) => ({
      ...formState,
      ...newFormStates,
    }),
    FORM_INIT_STATE
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [beData, setBeData] = useState<any>(undefined);
  useEffect(() => {
    if (!beData) {
      fetch(`http://184.73.229.188:8080/api/v1/${profile?.user_role}/${profile?.id}`)
        .then((rs) => rs.json())
        .then((data) => {
          setBeData(data);
        })
        .catch((err) => console.log(err));
    }
  }, [beData]);

  // init states
  const BUSINESS_INIT_VALUES: Record<string, string> = {
    company_name: beData?.company_name,
    company_email: beData?.company_email,
    website_url: beData?.website_url,
  };
  const INFLUENECER_INIT_VALUES: Record<string, string> = {
    tiktok_url: beData?.tiktok_url,
    youtube_url: beData?.youtube_url,
    facebook_url: beData?.facebook_url,
    instagram_url: beData?.instagram_url,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const PROFILE_INIT_VALUES: Record<string, any> = {
    ...(profile?.user_role === "business" ? BUSINESS_INIT_VALUES : INFLUENECER_INIT_VALUES),
    email: profile?.email as string,
    full_name: profile?.full_name as string,
    new_password: "",
    confirm_password: "",
    phone: beData?.phone,
    country: beData?.country,
    city: beData?.city,
  };

  // create inputs based on models
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _genInput = (model: Record<string, any>[]) => {
    return [...model].map(({ id, label, type, required, placeholder, registerAs, tooltip }) => (
      <label key={id} htmlFor={id} className='input-group-md w-full text-right'>
        <span className='font-bold'>{label}</span>
        <div className='tooltip w-full' data-tip={id === "email" ? tooltip : label}>
          <input
            {...register(registerAs, {
              setValueAs: (v) => (v ? v.trim() : v),
            })}
            defaultValue={PROFILE_INIT_VALUES[id]}
            required={required}
            disabled={(formState.isSubmitting as boolean) || (formState.updateSuccess as boolean)}
            id={registerAs}
            type={type}
            placeholder={placeholder}
            className='input input-bordered input-primary w-full'
          />
        </div>
      </label>
    ));
  };

  // detect changes, ONLY enable submit when there is changes
  useEffect(() => {
    const subscription = watch((value) => {
      const FINAL_INIT_VALUES = {
        ...(profile?.user_role === "business" ? BUSINESS_INIT_VALUES : INFLUENECER_INIT_VALUES),
        ...PROFILE_INIT_VALUES,
      };

      const hasNoPwdChangesCheck = value.new_password === PROFILE_INIT_VALUES.new_password;
      if (hasNoPwdChangesCheck) delete FINAL_INIT_VALUES.confirm_password;
      const changesCheck = _isShallowEqual(FINAL_INIT_VALUES, {
        ...value,
      });

      setFormState({
        hasNoChanges: changesCheck,
        hasNoPwdChanges: hasNoPwdChangesCheck,
      });
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    (async () => {
      if (INIT_AVATAR_URL && !INIT_AVATAR_URL.startsWith("http")) {
        const _downloadImage = (await import("utils/profile"))._downloadImage;
        _downloadImage(INIT_AVATAR_URL, (imgUrl) => {
          setFormState({
            isDownloading: false,
            downloadUrl: imgUrl,
            avatarUrl: imgUrl,
            avatarExt: INIT_AVATAR_URL.split(".").pop() as string,
          });
        });
      } else setFormState({ isDownloading: false });
    })();
  }, [INIT_AVATAR_URL]);

  // when a photo file is changed
  const handlePhotoFileChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    try {
      // start uploading photo file
      setFormState({ isUploading: true });

      // if cancelled
      if (!event.target.files || event.target.files.length === 0) {
        setFormState({
          hasNoChanges: true,
          avatarUrl:
            (formState.downloadUrl as string) || profile?.avatar_url || FALLBACK_PROFILE_URL,
          avatarTempUrl: "",
        });
        tasty("Removed chosen photo.");
        return;
      }

      // get the first file
      const file = event.target.files[0];

      // handle file name for later uploading to Supabase
      const fileExt = file.name.split(".").pop();

      setFormState({
        hasNoChanges: false,
        avatarRawFile: file,
        avatarTempUrl: URL.createObjectURL(file), // important
        avatarExt: fileExt as string,
      });
      tasty("Uploaded chosen photo.");
    } catch (error) {
      console.log(`${error}`);
    } finally {
      setFormState({ isUploading: false });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _updateWithSchema = async (executedSchema: any) => {
    const final_photo_url = `${profile?.id}.${formState.avatarExt}`;
    if (formState.avatarRawFile) {
      // remove old avatar from STORAGE
      const { error: removeError } = await supabaseClient.storage
        .from("avatars")
        .remove([profile?.avatar_url as string]);

      // upload new avatar from STORAGE
      const { error: uploadError } = await supabaseClient.storage
        .from("avatars")
        .upload(final_photo_url, formState.avatarRawFile as File, {
          upsert: true,
        });

      if (removeError || uploadError) {
        // if error, toast error
        angry("Error updating profile. Try again later");

        // reset submitting state
        setFormState({ isSubmitting: false, isDownloading: false });
      }
    }

    // update PROFILES basic info
    const { email, new_password, full_name } = executedSchema.data;
    const { error: updateDbError } = await supabaseClient
      .from("profiles")
      .update({
        full_name,
        email,
        avatar_url: final_photo_url,
        updated_at: new Date().toISOString(),
      })
      .eq("id", profile?.id);

    // update PROFILES critical info
    const { error: updateAccError } = await updateUserData({
      email: email || undefined,
      password: new_password || undefined,
    });

    if (updateDbError || updateAccError) {
      // if error, toast error
      angry("Error updating profile. Try again later");

      // reset submitting state
      setFormState({ isSubmitting: false, isDownloading: false });
      return;
    }

    if (profile?.user_role) {
      const updateDbRes = await api.put(
        `http://184.73.229.188:8080/api/v1/${profile?.user_role}/${profile?.id}`,
        { ...executedSchema.data, avatar_url: final_photo_url }
      );

      console.log(updateDbRes);

      // if no error, toast msg
      const happyMsg = `Profile updated`;
      happy(happyMsg);

      // mark success state
      setFormState({ isSubmitting: false, isDownloading: false, updateSuccess: true });

      // reload
      setTimeout(() => {
        Router.reload();
      }, 1000);
    }
  };

  // update submit handler
  const handleSubmitData = async (data: FieldValues) => {
    setFormState({ isSubmitting: true, isDownloading: true });

    // scroll container to top to indicate loading
    const containerElement = document.getElementById("profile-form");
    if (containerElement) containerElement.scrollTo({ top: 0, behavior: "smooth" });

    const _executeSchema = (await import("utils/profile"))._executeSchema;
    const [isGood, executedSchema] = _executeSchema(PROFILE_ZOD_MODEL, data);
    if (isGood) _updateWithSchema(executedSchema);
    else setFormState({ isSubmitting: false, isDownloading: false });
  };

  return (
    <div className='flex items-center justify-center h-screen max-w-4xl mx-auto'>
      <form
        id='profile-form'
        onSubmit={handleSubmit((data: FieldValues) => handleSubmitData(data))}
        className={ProfileStyles.formContainer}
      >
        {/* photo input */}
        <ProfileImageInput
          isDownloading={formState.isDownloading as boolean}
          disabled={
            (formState.isUploading as boolean) ||
            (formState.isSubmitting as boolean) ||
            (formState.updateSuccess as boolean)
          }
          imageSrc={
            (formState.avatarTempUrl as string) ||
            (formState.avatarUrl as string) ||
            FALLBACK_PROFILE_URL
          }
          onChange={handlePhotoFileChange}
        />

        {/* form common inputs */}
        {_genInput(CUSTOMER_FORM_MODEL)}

        {/* confirm password input */}
        {!formState.hasNoPwdChanges && !(formState.updateSuccess as boolean) && (
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
              required={!formState.hasNoPwdChanges}
              disabled={(formState.isSubmitting as boolean) || (formState.updateSuccess as boolean)}
              id='confirm_password'
              type='password'
              placeholder='Confirm your new password'
              className='input input-bordered input-primary w-full'
              {...register("confirm_password")}
            />
          </label>
        )}

        {/* exclusive inputs */}
        {_genInput(profile?.user_role === "business" ? BUSINESS_FORM_MODEL : INFLUENCER_FORM_MODEL)}

        {/* submit button */}
        <Button
          disabled={formState.hasNoChanges as boolean}
          className={`${ProfileStyles.updateBtn} ${
            (formState.hasNoChanges as boolean) ? "bg-gray-400" : "bg-amber-500"
          }`}
        >
          UPDATE
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
