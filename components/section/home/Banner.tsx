import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "assets";
import { UIComponents } from "components";

const Banner = () => {
  const { SampleDashboardBanner } = images;
  const { Button } = UIComponents;

  return (
    <div className="flex gap-10 justify-between h-[calc(100vh_-_95px)] select-none border-l-[10px] border-[rgb(236,44,108)] dark:border-[rgb(238,60,119)]">
      <div className="w-[46%] flex flex-col gap-8 justify-center items-start pr-10 pl-20 border-double border-l-[30px] border-[rgb(236,44,108)] dark:border-[rgb(238,60,119)]">
        <h1 className="text-center tracking-wide break-words text-[rgb(236,44,108)] dark:text-[rgb(238,60,119)] font-[500] text-[6rem] leading-[7.25rem]">
          HELP <span className="font-[700] text-[6.25rem]">GROWING</span> BUSINESSES
        </h1>

        <h2 className="font-[600] text-[1.6rem] px-10 break-words text-center leading-[3rem]">
          We're here to find the best advertisement deals for your business!
        </h2>

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
      </div>
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
    </div>
  );
};

export default Banner;
