import Image from "next/image";
import { motion } from "framer-motion";
import { AboutWrapper } from "./style";
import { UIComponents, VariantComponents } from "components";
import { images } from "assets";

const MotionAboutWrapper = motion(AboutWrapper);

const About = () => {
  const { CelebHorizontal, CelebVertical, LogoMajorBg } = images;
  const { SignInButton } = VariantComponents;
  const { BackgroundCircles } = UIComponents;
  return (
    <MotionAboutWrapper
      {...{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 },
      }}
    >
      <BackgroundCircles positionClass="right-0 bottom-0" />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="relative w-full h-full flex-1 flex justify-center items-center">
          <BackgroundCircles positionClass="top-1/2 right-1/2" />
          <Image
            priority
            src={CelebHorizontal}
            alt="Home: horizontal celebrities smiling"
            className="lg:w-full object-cover z-20
                rounded-[4rem] shadow-lg scale-[0.82]
              shadow-gray-300/60 dark:shadow-amber-500/30"
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 1.75,
            }}
            className="
                absolute overflow-hidden 
                bottom-[10rem] right-0 
                h-[18.75rem] w-[18.75rem] 
                rounded-full z-30
                border-[1.25rem] border-gray-200/40
            "
          >
            <Image
              priority
              src={CelebVertical}
              alt="Home: horizontal celebrities focusing"
              className="object-fill z-20"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 1.75,
            }}
            className="
                absolute flex justify-center items-center
                left-[1.5rem] top-1/3 
                w-[7.5rem] h-[7.5rem]
                rounded-full z-30 bg-gray-200/40
            "
          >
            <Image
              priority
              src={LogoMajorBg}
              alt="Home: site major logo on top of smilling celebrities image"
              className="object-fill z-20"
            />
          </motion.div>
        </div>
        <div
          className="relative w-full h-full flex-1 flex flex-col 
        justify-start items-center py-16 gap-5"
        >
          <p className="font-[700] text-[3.5rem] text-[rgb(236,44,108)] dark:text-[rgb(238,60,119)]">
            About Us
          </p>
          <p className="px-[5.75rem] text-justify leading-[2.1rem] break-words text-[1.25rem]">
            <strong>MAVENBOND</strong> is one of the best influencer marketing platforms that
            provides services for advertising campaigns. The influencer marketing platform helps you
            to create and run ad campaigns for your business by hiring top content creators in the
            market. Receive advertising offers from advertisers for your ad requests. In addition,
            this platform allows you to browse and check the details of content creators. So, you
            are able to select the most suitable influences to represent your business.
          </p>
          <p className="px-[5.75rem] text-justify leading-[2.1rem] break-words text-[1.25rem]">
            <strong>MAVENBOND</strong> is an all-in-one cloud-based platform that completely eases
            the management of ad campaigns, the creation of ad campaigns, and knowing the status of
            ongoing campaigns. Saves up to 50-60% of the time while creating and running an ad
            campaign for your business with just a few clicks. So, what are you waiting for 👇
          </p>

          {/* sign in button */}
          <SignInButton
            dimensionClass="md:w-[160px] md:h-[50px] mb-4 lg:mt-4"
            extraTextBgClass="text-[12px] md:text-[18px]"
          />
        </div>
      </div>
    </MotionAboutWrapper>
  );
};

export default About;
