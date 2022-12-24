import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "assets";
import { UIComponents } from "components";
import { BannerWrapper, TypographyCol, MainTitle, SubTitle } from "./style";

const Banner = () => {
  const { SampleDashboardBanner } = images;
  const { Button } = UIComponents;

  return (
    <BannerWrapper>
      <TypographyCol>
        <MainTitle>
          HELP <span className="highlight">GROWING</span> BUSINESSES
        </MainTitle>
        <SubTitle>We're here to find the best advertisement deals for your business!</SubTitle>

        {/* sign in button */}
        <Button
          dimensionClass="w-[160px] h-[50px] mt-6 mb-14 self-center"
          textBgClass="
          text-white text-[18px] rounded-3xl
          bg-gradient-to-r from-orange-600 to-amber-500
        "
          shadowClass="hover:shadow-amber-500"
        >
          SIGN IN
        </Button>
      </TypographyCol>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1.75,
        }}
        className="flex flex-col justify-center items-center pr-10"
      >
        <Image
          priority
          src={SampleDashboardBanner}
          alt="Home: sample dashboard banner"
          className="w-full object-cover rounded-2xl shadow-2xl
          shadow-gray-300/60 dark:shadow-amber-500/50"
        />
      </motion.div>
    </BannerWrapper>
  );
};

export default Banner;
