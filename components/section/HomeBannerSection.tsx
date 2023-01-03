import dynamic from "next/dynamic";
import Image from "next/image";
import HomeStyles from "styles/Home.module.css";
import HomeDashboard from "public/home_dashboard.webp";

const BgCircles = dynamic(() => import("components/common/BgCircles"));
const LoginButton = dynamic(() => import("components/variant/LoginButton"));

const HomeBannerSection = () => {
  return (
    <div className={HomeStyles.bannerSection}>
      <BgCircles className='right-1/2 top-1/2 lg:right-0 lg:top-0' />
      <BgCircles className='hidden lg:flex lg:left-0 lg:bottom-0 scale-[1.25]' />
      <div className={HomeStyles.hero}>
        <Image
          priority
          src={HomeDashboard}
          alt='Home: sample dashboard banner'
          width={1892}
          height={1142}
          className={HomeStyles.heroImage}
        />
      </div>
      <div className={HomeStyles.title}>
        <h1>
          HELP <span>GROWING</span> BUSINESSES
        </h1>
        <h2>We're here to find the best advertisement deals for your business!</h2>
        <LoginButton
          className='w-32 h-12 text-[1.2rem] bg-amber-500 rounded-md
            hover:shadow-xl hover:shadow-amber-500/40
            transition-shadow duration-300'
        >
          LOGIN
        </LoginButton>
      </div>
    </div>
  );
};

export default HomeBannerSection;
