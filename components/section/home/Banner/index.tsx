import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "assets";
import { UIComponents } from "components";
import { BannerWrapper, TypographyCol, MainTitle, SubTitle } from "./style";

const MotionBannerWrapper = motion(BannerWrapper);
const MotionTypographyCol = motion(TypographyCol);

const Banner = () => {
  const { SampleDashboardBanner } = images;
  const { Button } = UIComponents;

  return (
    <MotionBannerWrapper
      {...{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 },
      }}
    >
      <MotionTypographyCol initial={{ x: -300 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
        <MainTitle>
          HELP <span className="highlight">GROWING</span> BUSINESSES
        </MainTitle>
        <SubTitle>We're here to find the best advertisement deals for your business!</SubTitle>

        {/* sign in button */}
        <Button
          dimensionClass="w-[110px] h-[45px] md:w-[160px] md:h-[50px] mb-4 lg:mt-4 self-center"
          textBgClass="
          text-white text-[12px] md:text-[18px] rounded-lg
          bg-gradient-to-r from-orange-600 to-amber-500
        "
          shadowClass="hover:shadow-amber-500"
        >
          SIGN IN
        </Button>
      </MotionTypographyCol>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1.75,
        }}
        className="flex-col justify-center items-center hidden 
        lg:pr-10 min-[768px]:flex"
      >
        <Image
          priority
          src={SampleDashboardBanner}
          alt="Home: sample dashboard banner"
          className="w-[75%] lg:w-full object-cover mt-[4rem] lg:mt-0
          rounded-2xl shadow-2xl
          shadow-gray-300/60 dark:shadow-amber-500/50"
        />
      </motion.div>
    </MotionBannerWrapper>
  );
};

export default Banner;
