import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { BannerWrapper } from "./style";
import HomeDashboard from "public/home_dashboard.webp";

const MotionBannerWrapper = motion(BannerWrapper);
const SignInButton = dynamic(() => import("components/variant/LoginButton"));
const BackgroundCircles = dynamic(() => import("components/ui/BackgroundCircles"));
const StyledWrapper = dynamic(() => import("styles/globals").then((rs) => rs.StyledWrapper));

const Banner = () => {
  return (
    <StyledWrapper>
      <MotionBannerWrapper
        {...{
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.6 },
        }}
      >
        <div className='container' id='banner'>
          <BackgroundCircles
            positionClass='
              xs:right-1/2 xs:top-1/2 
              sm:right-1/2 sm:top-1/2 right-0 top-0
            '
          />
          <BackgroundCircles
            positionClass='
              hidden 
              md:flex lg:flex xl:flex 
              md:left-0 md:bottom-1/4
              g:left-0 lg:bottom-1/4 
              xl:left-0 xl:bottom-1/4
            '
          />

          <div className='title'>
            <h1>
              HELP <span>GROWING</span> BUSINESSES
            </h1>
            <h2>We're here to find the best advertisement deals for your business!</h2>
            <SignInButton className='scale-[1.15] xs:my-5 sm:my-5' />
          </div>

          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.5,
            }}
            className='hero'
          >
            <Image
              priority
              src={HomeDashboard}
              alt='Home: sample dashboard banner'
              width={1892}
              height={1142}
              className='
                self-center
                object-fill
                shadow-gray-300/60 dark:shadow-amber-500/50
                rounded-2xl shadow-2xl

                md:w-[75%] 
                lg:w-full xl:w-full
                lg:mr-[8rem] xl:mr-[8rem]
              '
            />
          </motion.div>
        </div>
      </MotionBannerWrapper>
    </StyledWrapper>
  );
};

export default Banner;
