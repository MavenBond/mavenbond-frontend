import { useEffect, useState } from "react";
import Link from "next/link";
import { Client } from "react-hydration-provider";
import { useRouter } from "next/router";

// styling
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";

// components
import { Button, NotiBell } from "components";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";

// hooks
import { useWindowWidth } from "@react-hook/window-size/throttled";
import useScrollPosition from "@react-hook/window-scroll";

const HeaderContainer = styled.header`
  ${tw`
  text-black bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(255,255,255,1)]
  sticky top-0 py-6 px-10 z-20 rounded-b-md
  flex justify-between items-center
  transition-all duration-500
  `}
`;
const MotionHeader = motion(HeaderContainer);
const NavLinksWrapper = styled.ul`
  ${tw`
  bg-white
  absolute top-[60px] py-10 left-0 px-[40%] z-10
  text-center flex flex-col gap-8 select-none 
  shadow-[0_5px_5px_-2px_rgba(219, 219, 219, 0.4)] rounded-b-md
  lg:shadow-[0_5px_5px_-2px_rgba(219, 219, 219, 0)]
  lg:relative lg:flex-row lg:top-0 lg:px-0 lg:py-0
  `}

  .nav-link {
    ${tw`
      pt-[10px]
      decoration-orange-600 
      hover:opacity-[0.4]
      hover:underline 
      hover:underline-offset-[6px] 
      hover:decoration-[4px] 
      hover:decoration-amber-500 
      transition-all duration-300
    `}
  }
`;
const MotionNavLinksWrapper = motion(NavLinksWrapper);

const Header = () => {
  const router = useRouter();
  const NAVIGATIONS = [
    { label: "HOME", path: "/" },
    { label: "MANAGE", path: "/manage" },
    { label: "BROWSE", path: "/browse" },
    { label: "REPORT", path: "/report" },
  ];

  // window width tracking
  const windowWidth = useWindowWidth();
  const [windowWidthTracker, setWindowWidthTracker] = useState(windowWidth);

  // execute changes on scrolling
  const scrollY = useScrollPosition(60 /*frames per second*/);
  const [scrollStyles, setScrollStyles] = useState({});
  useEffect(() => {
    if (scrollY > 40) {
      setScrollStyles({
        boxShadow: "0 5px 5px -2px rgba(219, 219, 219, 0.6)",
        backdropFilter: "saturate(120%) blur(5px)",
        padding: windowWidthTracker >= 1024 ? "0.75rem 8rem" : "0.75rem 1.5rem",
      });
    } else {
      setScrollStyles({});
    }
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* logo on the left side */}
        <Link href="/">
          <h1 className="text-2xl font-semibold md:text-[2rem] text-amber-500 select-none">
            MAVENBOND
          </h1>
        </Link>

        {/* nav items + (sign in / sign up || profile pic + name) on the right sides */}
        <div className="flex flex-row justify-around items-center gap-8">
          {(showMobileNav || windowWidthTracker >= 1024) && (
            <MotionNavLinksWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
            >
              {NAVIGATIONS.map(({ path, label }) => (
                <Link
                  key={label}
                  href={path}
                  className={`${router.pathname === path && "text-amber-500"} nav-link`}
                >
                  {label}
                </Link>
              ))}
              {windowWidthTracker >= 1024 && <NotiBell hasNoti />}
              <Button
                dimensionClass="w-[120px] h-[45px]"
                textBgClass="text-white text-[14px] bg-gradient-to-r from-orange-600 to-amber-500"
                shadowClass="hover:shadow-amber-500"
              >
                SIGN IN
              </Button>
            </MotionNavLinksWrapper>
          )}

          {/* icons to show and hide mobile nav */}

          <div className="flex gap-6 ">
            {windowWidthTracker < 1024 && <NotiBell hasNoti />}
            {windowWidthTracker < 1024 && !showMobileNav && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
              >
                <Bars4Icon
                  onClick={() => setShowMobileNav(!showMobileNav)}
                  className="h-8 w-8 cursor-pointer pt-[4px]"
                />
              </motion.div>
            )}
            {windowWidthTracker < 1024 && showMobileNav && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
              >
                <XMarkIcon
                  onClick={() => setShowMobileNav(!showMobileNav)}
                  className="h-8 w-8 cursor-pointer pt-[4px]"
                />
              </motion.div>
            )}
          </div>
        </div>
      </MotionHeader>
    </Client>
  );
};

export default Header;
