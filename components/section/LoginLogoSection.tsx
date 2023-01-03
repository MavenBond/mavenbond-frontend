import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";

const LoginLogoSection = () => {
  return (
    <>
      <div className='absolute top-0 flex items-center justify-center w-full'>
        <h1 className='text-[2rem] lg:text-[3rem] font-bold text-amber-500 pt-5'>
          <Link href='/' aria-label='Go Home from Logo'>
            MAVENBOND
          </Link>
        </h1>
      </div>
      <Link href='/' aria-label='Go Home from Mask Icon'>
        <XMarkIcon
          className='h-10 w-10 
            md:h-12 md:w-12 
            top-[0.125rem] right-[0.125rem]
            md:top-[1rem] md:right-[1rem]
            absolute cursor-pointer text-amber-500'
        />
      </Link>
    </>
  );
};

export default LoginLogoSection;
