import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Client } from "react-hydration-provider";

// components
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button, NotiBell } from "components";
import { ROUTES } from "routes";
import { HeaderContainer, NavLinksWrapper } from "./style";

// hooks
import useScrollPosition from "@react-hook/window-scroll";
import { useWindowWidth } from "@react-hook/window-size/throttled";

// motion init components
const MotionHeader = motion(HeaderContainer);
const MotionNavLinksWrapper = motion(NavLinksWrapper);

// motion common controls
const MOTION_COMMON_CONTROLS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

const Header = () => {
  // next router
  const router = useRouter();

  // window width tracking
  const windowWidth = useWindowWidth();
  const [windowWidthTracker, setWindowWidthTracker] = useState(windowWidth);

  // execute style changes on scrolling
  const scrollY = useScrollPosition(60 /*frames per second*/);
  const [scrollStyles, setScrollStyles] = useState({});
  useEffect(() => {
    if (scrollY <= 40) {
      setScrollStyles({});
      return;
    }

    setScrollStyles({
      boxShadow: "0 5px 5px -2px rgba(219, 219, 219, 0.6)",
      backdropFilter: "saturate(120%) blur(5px)",
      padding: windowWidthTracker >= 1024 ? "1rem 8rem" : "1rem 1.5rem",
    });
  }, [windowWidthTracker, scrollY]);

  // toggle nav bar for mobile based on screen width
  const [showMobileNav, setShowMobileNav] = useState(false);
  useEffect(() => {
    setWindowWidthTracker(windowWidth);
  }, [windowWidth]);

  return (
    <Client>
      <MotionHeader
        style={scrollStyles}
        {...{ ...MOTION_COMMON_CONTROLS, transition: { duration: 1 } }}
      >
        {/* logo on the left side */}
        <Link href="/">
          <h1
            className="
            text-2xl font-semibold text-amber-500 select-none
            md:text-[2rem] lg:pl-8"
          >
            MAVENBOND
          </h1>
        </Link>

        {/* nav items + (sign in / sign up || profile pic + name) on the right sides */}
        <div className="flex flex-row justify-between items-center gap-8">
          {(showMobileNav || windowWidthTracker >= 1024) && (
            <MotionNavLinksWrapper {...{ ...MOTION_COMMON_CONTROLS }}>
              {/* navigation routes */}
              {Object.values(ROUTES).map(({ displayName, path }) => (
                <Link
                  key={displayName}
                  href={path}
                  className={`${router.pathname === path && "text-amber-500"} nav-link`}
                >
                  {displayName}
                </Link>
              ))}
              {windowWidthTracker >= 1024 && <NotiBell hasNoti />}

              {/* sign in button */}
              <Button
                dimensionClass="w-[120px] h-[45px] mx-auto lg:mx-0"
                textBgClass="
                  text-white text-[14px] 
                  bg-gradient-to-r from-orange-600 to-amber-500
                "
                shadowClass="hover:shadow-amber-500"
              >
                SIGN IN
              </Button>
            </MotionNavLinksWrapper>
          )}

          {/* icons to show and hide mobile nav */}
          {windowWidthTracker < 1024 && (
            <div className="flex gap-6 ">
              <NotiBell hasNoti />
              {!showMobileNav && (
                <motion.div {...{ ...MOTION_COMMON_CONTROLS }}>
                  <Bars4Icon
                    onClick={() => setShowMobileNav(!showMobileNav)}
                    className="h-8 w-8 cursor-pointer pt-[4px]"
                  />
                </motion.div>
              )}
              {showMobileNav && (
                <motion.div {...{ ...MOTION_COMMON_CONTROLS }}>
                  <XMarkIcon
                    onClick={() => setShowMobileNav(!showMobileNav)}
                    className="h-8 w-8 cursor-pointer pt-[4px]"
                  />
                </motion.div>
              )}
            </div>
          )}
        </div>
      </MotionHeader>
    </Client>
  );
};

export default Header;
