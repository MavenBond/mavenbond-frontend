import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Client } from "react-hydration-provider";

// components
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { UIComponents, VariantComponents } from "components";
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
  transition: { duration: 0.5 },
};

const Header = () => {
  // destruct components
  const { NotiBell, ThemeToggler } = UIComponents;
  const { SignInButton } = VariantComponents;

  // next router
  const router = useRouter();

  // toggle nav bar for mobile based on screen width
  const [isMobileNavShowing, setIsMobileNavShowing] = useState(false);

  // window width tracking
  const windowWidth = useWindowWidth();

  // execute style changes on scrolling
  const scrollY = useScrollPosition(60 /*frames per second*/);
  const [scrollStyles, setScrollStyles] = useState({});
  useEffect(() => {
    if (scrollY <= 40) {
      setScrollStyles({});
      return;
    }
    setScrollStyles({
      boxShadow: "0 10px 10px -10px rgba(251, 191, 56, 0.3)",
      backdropFilter: "saturate(120%) blur(5px)",
      padding: windowWidth >= 1024 ? "1rem 4rem" : "1rem 1.5rem",
    });
  }, [windowWidth, scrollY]);

  const _FixedUtils = () => (
    <>
      <NotiBell hasNoti textClass="text-black dark:text-white" />
      <ThemeToggler
        extraSunClass="pt-[3px] text-amber-500"
        extraMoonClass="pt-[2px] text-[rgba(124,58,237,1)]"
      />
    </>
  );

  return (
    <Client>
      <MotionHeader style={scrollStyles} {...{ ...MOTION_COMMON_CONTROLS }}>
        {/* logo on the left side */}
        <Link href="/">
          <h1
            className="
            text-2xl font-['Inter'] font-semibold text-amber-500 select-none
            md:text-[2.25rem]"
          >
            MAVENBOND
          </h1>
        </Link>

        {/* nav items + (sign in / sign up || profile pic + name) on the right sides */}
        <div className="flex flex-row justify-between items-center gap-8">
          {(isMobileNavShowing || windowWidth >= 1024) && (
            <MotionNavLinksWrapper {...{ ...MOTION_COMMON_CONTROLS }}>
              {/* navigation routes */}
              {Object.values(ROUTES).map(({ displayName, path }) => (
                <Link
                  key={displayName}
                  href={path}
                  className={`
                  ${router.pathname === path && "text-amber-500"} 
                  ${router.pathname !== path && "text-black dark:text-white"} 
                  nav-link
                  `}
                >
                  {displayName}
                </Link>
              ))}

              {windowWidth >= 1024 && <_FixedUtils />}

              {/* sign in button */}
              <SignInButton dimensionClass="w-[120px]" extraTextBgClass="text-[14px]" />
            </MotionNavLinksWrapper>
          )}

          {/* icons to show and hide mobile nav */}
          {windowWidth < 1024 && (
            <div className="flex gap-6">
              <_FixedUtils />
              {!isMobileNavShowing && (
                <motion.div {...{ ...MOTION_COMMON_CONTROLS }}>
                  <Bars4Icon
                    onClick={() => setIsMobileNavShowing(!isMobileNavShowing)}
                    className="h-9 w-9 cursor-pointer pt-[4px] text-black dark:text-white"
                  />
                </motion.div>
              )}
              {isMobileNavShowing && (
                <motion.div {...{ ...MOTION_COMMON_CONTROLS }}>
                  <XMarkIcon
                    onClick={() => setIsMobileNavShowing(!isMobileNavShowing)}
                    className="h-9 w-9 cursor-pointer pt-[4px] text-black dark:text-white"
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
