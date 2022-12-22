import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// styling
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";

// components
import { Button, NotiBell } from "components";

// hooks
import { useWindowWidth } from "@react-hook/window-size/throttled";
import useScrollPosition from "@react-hook/window-scroll";

const HeaderContainer = styled.header`
  ${tw`
  text-black bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(255,255,255,1)]
  sticky top-0 py-6 px-10 z-20 rounded-b-md
  flex justify-between items-center
  transition-all duration-500
  xl:items-center
  `}
`;
const MotionHeader = motion(HeaderContainer);
const NavLinksWrapper = styled.ul`
  ${tw`flex gap-8`}

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
  useEffect(() => {
    setWindowWidthTracker(windowWidth);
  }, [windowWidth]);

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

  return (
    <MotionHeader
      style={scrollStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* logo on the left side */}
      <Link href="/">
        <h1 className="text-xl font-semibold md:text-[2rem] text-amber-500">MAVENBOND</h1>
      </Link>

      {/* nav items + (sign in / sign up || profile pic + name) on the right sides */}
      <div className="flex flex-row justify-around items-center">
        <NavLinksWrapper>
          {windowWidthTracker >= 1024 &&
            NAVIGATIONS.map(({ path, label }) => (
              <Link
                key={label}
                href={path}
                className={`${router.pathname === path && "text-amber-500"} nav-link`}
              >
                {label}
              </Link>
            ))}
          <NotiBell hasNoti textClass="text-amber-500" />
          {windowWidthTracker >= 1024 && (
            <Button
              dimensionClass="w-[100px] h-[45px]"
              textBgClass="text-white text-[14px] bg-gradient-to-r from-orange-600 to-amber-500"
              shadowClass="hover:shadow-amber-500"
            >
              SIGN IN
            </Button>
          )}
        </NavLinksWrapper>
      </div>
    </MotionHeader>
  );
};

export default Header;
