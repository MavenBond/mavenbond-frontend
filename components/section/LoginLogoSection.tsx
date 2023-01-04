import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import LoginStyles from "styles/Login.module.css";

const LoginLogoSection = () => {
  return (
    <>
      {/* logo */}
      <div className='absolute top-0 flex items-center justify-center w-full'>
        <h1 className='text-[2rem] lg:text-[3rem] font-bold text-amber-500 pt-5'>
          <Link href='/' aria-label='Go Home from Logo'>
            MAVENBOND
          </Link>
        </h1>
      </div>

      {/* X icon */}
      <Link href='/' aria-label='Go Home from Mask Icon'>
        <XMarkIcon className={LoginStyles.maskIcon} />
      </Link>
    </>
  );
};

export default LoginLogoSection;
