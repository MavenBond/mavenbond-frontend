import Image from "next/image";
import { ChangeEventHandler } from "react";
import { TailSpin } from "react-loader-spinner";
import ProfileStyles from "styles/Profile.module.css";

type Props = {
  isDownloading: boolean;
  disabled: boolean;
  imageSrc: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const ProfileImageInput = ({ isDownloading, disabled, imageSrc, onChange }: Props) => {
  return (
    <>
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
        <div className='relative w-32 h-32 flex-shrink-0'>
          <Image
            fill
            priority
            src={imageSrc}
            alt='Profile: preview profile image'
            className={ProfileStyles.photoPreview}
            sizes='(max-width: 768px) 300px,
            (max-width: 1200px) 400px'
          />
        </div>
      )}
      <label className='input-group-md w-full text-right mt-14 lg:mt-8'>
        <span className='font-bold'>Profile Photo</span>
        <div
          className='tooltip w-full'
          data-tip={`To remove previous selection, hit 'CHOOSE FILE' 
        again and hit 'Cancel' button to close mini window`}
        >
          <input
            onChange={onChange}
            disabled={disabled}
            id='avatarUrl'
            accept='image/*'
            type='file'
            className='file-input file-input-bordered 
            file-input-primary w-full'
          />
        </div>
      </label>
    </>
  );
};

export default ProfileImageInput;
