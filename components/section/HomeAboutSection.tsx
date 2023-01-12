import dynamic from "next/dynamic";
import Image from "next/image";
import CelebHorizontal from "public/celeb_horizontal.webp";
import CelebVertical from "public/celeb_vertical.webp";
import LogoMajorBg from "public/logo_major_bg.webp";
import HomeStyles from "styles/Home.module.css";
import { HOME_ABOUT_CONTENT_1, HOME_ABOUT_CONTENT_2 } from "projConstants";

const BgCircles = dynamic(() => import("components/common/BgCircles"));
const LoginButton = dynamic(() => import("components/variant/LoginButton"));

const HomeAboutSection = () => {
  return (
    <div className={HomeStyles.aboutSection} id='about-us'>
      <BgCircles className='left-0 lg:left-1/4 bottom-1/2 lg:flex' />
      <BgCircles className='hidden lg:right-0 lg:bottom-0 lg:flex' />

      {/* images column */}
      <div className={`${HomeStyles.aboutCol} ${HomeStyles.aboutImgCol}`}>
        <Image
          priority
          className={HomeStyles.celebHorizontal}
          width={5837}
          height={3891}
          src={CelebHorizontal}
          alt='Home: horizontal celebrities smiling'
        />

        <div className={HomeStyles.celebVertical}>
          <Image
            loading='lazy'
            placeholder='blur'
            src={CelebVertical}
            alt='Home: horizontal celebrities focusing'
            className='z-40 object-fill'
          />
        </div>

        <div className={HomeStyles.logoContainer}>
          <Image
            loading='lazy'
            placeholder='blur'
            src={LogoMajorBg}
            alt='Home: site major logo'
            className='z-20 object-cover'
          />
        </div>
      </div>

      {/* text column */}
      <div className={`${HomeStyles.aboutCol} ${HomeStyles.aboutTextCol}`}>
        <div className={HomeStyles.logoContainerMobile}>
          <Image
            loading='lazy'
            placeholder='blur'
            src={LogoMajorBg}
            alt='Home: site major logo'
            className='z-20 object-cover'
          />
        </div>
        <h2 className={HomeStyles.aboutTitle}>About Us</h2>
        <p className={`${HomeStyles.firstContent}`}>
          <strong className={HomeStyles.contentStrong}>MAVENBOND</strong> {HOME_ABOUT_CONTENT_1}
        </p>

        <p className={`${HomeStyles.secondContent}`}>
          <strong className={HomeStyles.contentStrong}>MAVENBOND</strong> {HOME_ABOUT_CONTENT_2}
        </p>

        <LoginButton
          className='text-[#0d1626] w-32 h-12 text-[1.2rem] 
          bg-amber-500 rounded-md
            hover:shadow-xl hover:shadow-amber-500/40
            transition-shadow duration-300'
        >
          LOGIN
        </LoginButton>
      </div>
    </div>
  );
};

export default HomeAboutSection;
