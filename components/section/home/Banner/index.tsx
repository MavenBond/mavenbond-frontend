import { images } from "assets";
import { UIComponents, VariantComponents } from "components";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { StyledWrapper } from "styles/globals";
import { BannerWrapper } from "./style";
import { useRouter } from "next/router";

const MotionBannerWrapper = motion(BannerWrapper);

const Banner = () => {
  const { SampleDashboardBanner } = images;
  const { SignInButton } = VariantComponents;
  const { BackgroundCircles } = UIComponents;
  const router = useRouter();

  useEffect(() => {
    if (!router.asPath.includes("#")) {
      setTimeout(function () {
        window.scroll({
          top: 60,
          behavior: "smooth",
        });
      }, 200);
    }
  });

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
            whileInView={{ y: [0, -40, 0] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 1.75,
            }}
            className='hero'
          >
            <Image
              priority
              src={SampleDashboardBanner}
              alt='Home: sample dashboard banner'
              className='
                self-center
                object-cover
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
