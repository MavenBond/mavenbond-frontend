import { images } from "assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { AboutWrapper } from "./style";
import dynamic from "next/dynamic";
import CelebHorizontal from "public/celeb_horizontal.webp";

const SignInButton = dynamic(() => import("components/variant/LoginButton"));
const BackgroundCircles = dynamic(() => import("components/ui/BackgroundCircles"));
const StyledWrapper = dynamic(() => import("styles/globals").then((rs) => rs.StyledWrapper));

const About = () => {
  const { CelebVertical, LogoMajorBg } = images;

  return (
    <StyledWrapper>
      <AboutWrapper>
        <div className='container' id='about-us'>
          <BackgroundCircles
            positionClass='
                lg:right-0 lg:bottom-0
                xl:right-0 xl:bottom-0
                xs:hidden sm:hidden md:hidden
              '
          />

          <motion.div
            initial={{ opacity: 0, y: 125 }}
            whileInView={{ opacity: 1, y: [125, -125, 0] }}
            transition={{ duration: 1.5 }}
            className='special about'
          >
            <BackgroundCircles
              positionClass='
                lg:right-1/2 lg:bottom-1/2
                xl:right-1/2 xl:bottom-1/2
                xs:hidden sm:hidden md:hidden
              '
            />

            <motion.div
              animate={{ y: [15, 25, 15] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 1.75,
              }}
              className='logo-container'
            >
              <Image
                loading='lazy'
                src={LogoMajorBg}
                alt='Home: site major logo'
                className='object-fill z-20'
              />
            </motion.div>

            <motion.div
              animate={{ y: [15, 25, 15] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 1.75,
              }}
              className='celeb-vertical'
            >
              <Image
                loading='lazy'
                src={CelebVertical}
                alt='Home: horizontal celebrities focusing'
                className='object-fill z-40'
              />
            </motion.div>

            <Image
              className='
                absolute right-0 object-fill z-20
                rounded-[4rem] shadow-lg scale-[0.82]
              shadow-gray-300/60 dark:shadow-amber-500/30
              '
              width={850}
              height={500}
              loading='lazy'
              src={CelebHorizontal}
              alt='Home: horizontal celebrities smiling'
            />
          </motion.div>

          <div className='about'>
            <BackgroundCircles
              positionClass='
                xs:left-0 xs:bottom-1/2
                sm:left-0 sm:bottom-1/2
                md:top-1/4
                lg:hidden xl:hidden
              '
            />
            <motion.div
              animate={{ y: [15, 25, 15] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 1.75,
              }}
              className='logo-container'
            >
              <Image
                loading='lazy'
                src={LogoMajorBg}
                alt='Home: site major logo'
                className='object-fill z-20'
              />
            </motion.div>

            <motion.div
              className='
                  overflow-hidden
                  h-[22rem] w-[22rem]
                  rounded-full z-30
                  border-[1.25rem] border-gray-200/40
                  xs:hidden sm:hidden lg:hidden xl:hidden
              '
            >
              <Image
                loading='lazy'
                placeholder='blur'
                src={CelebVertical}
                alt='Home: horizontal celebrities focusing'
                className='object-fill z-20'
              />
            </motion.div>

            <h2>About Us</h2>
            <motion.p
              {...{
                initial: { opacity: 0, x: -100 },
                whileInView: { opacity: 1, x: [-100, 50, 0] },
                transition: { duration: 1.25 },
              }}
              className='first-content'
            >
              <strong>MAVENBOND</strong> is one of the best influencer marketing platforms that
              provides services for advertising campaigns. The influencer marketing platform helps
              you to create and run ad campaigns for your business by hiring top content creators in
              the market. Receive advertising offers from advertisers for your ad requests. In
              addition, this platform allows you to browse and check the details of content
              creators. So, you are able to select the most suitable influences to represent your
              business.
            </motion.p>

            <motion.p
              {...{
                initial: { opacity: 0, x: -100 },
                whileInView: { opacity: 1, x: [-100, 50, 0] },
                transition: { duration: 1.5 },
              }}
              className='second-content'
            >
              <strong>MAVENBOND</strong> is an all-in-one cloud-based platform that completely
              simplifies the management of ad campaigns, the creation of ad campaigns, and knowing
              the status of ongoing campaigns. Saves up to 50-60% of the time while creating and
              running an ad campaign for your business with just a few clicks. So, what are you
              waiting for ✨
            </motion.p>
            <SignInButton className='scale-[1.15] xs:my-1 sm:my-1 md:hidden lg:hidden xl:hidden' />
          </div>
        </div>
      </AboutWrapper>
    </StyledWrapper>
  );
};

export default About;
