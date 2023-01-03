import dynamic from "next/dynamic";
import Image from "next/image";
import CelebHorizontal from "public/celeb_horizontal.webp";
import CelebVertical from "public/celeb_vertical.webp";
import LogoMajorBg from "public/logo_major_bg.webp";
import HomeStyles from "styles/Home.module.css";

const BgCircles = dynamic(() => import("components/common/BgCircles"));
const LoginButton = dynamic(() => import("components/variant/LoginButton"));

const HomeAboutSection = () => {
  return (
    <div className={HomeStyles.aboutSection} id='about-us'>
      <BgCircles className='left-0 lg:left-1/4 bottom-1/2 lg:flex' />
      <BgCircles className='lg:right-0 lg:bottom-0 hidden lg:flex' />
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
            className='object-fill z-40'
          />
        </div>

        <div className={HomeStyles.logoContainer}>
          <Image
            loading='lazy'
            placeholder='blur'
            src={LogoMajorBg}
            alt='Home: site major logo'
            className='object-fill z-20'
          />
        </div>
      </div>
      <div className={`${HomeStyles.aboutCol} ${HomeStyles.aboutTextCol}`}>
        <div className={HomeStyles.logoContainerMobile}>
          <Image
            loading='lazy'
            placeholder='blur'
            src={LogoMajorBg}
            alt='Home: site major logo'
            className='object-fill z-20'
          />
        </div>
        <h2 className={HomeStyles.aboutTitle}>About Us</h2>
        <p className={`${HomeStyles.firstContent}`}>
          <strong className={HomeStyles.contentStrong}>MAVENBOND</strong> is one of the best
          influencer marketing platforms that provides services for advertising campaigns. The
          influencer marketing platform helps you to create and run ad campaigns for your business
          by hiring top content creators in the market. Receive advertising offers from advertisers
          for your ad requests. In addition, this platform allows you to browse and check the
          details of content creators. So, you are able to select the most suitable influences to
          represent your business.
        </p>

        <p className={`${HomeStyles.secondContent}`}>
          <strong className={HomeStyles.contentStrong}>MAVENBOND</strong> is an all-in-one
          cloud-based platform that completely simplifies the management of ad campaigns, the
          creation of ad campaigns, and knowing the status of ongoing campaigns. Saves up to 50-60%
          of the time while creating and running an ad campaign for your business with just a few
          clicks. So, what are you waiting for ✨
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
