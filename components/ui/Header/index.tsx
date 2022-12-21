import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// styling
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";

// components
import { LogoMajorBg } from "assets";

const HeaderContainer = styled.header`
  ${tw`
  bg-[rgba(255,255,255,0.8)]
  sticky top-0 py-6 px-8 z-20 rounded-b-md
  flex justify-between items-center
  transition-all duration-500
  xl:items-center
  `}
`;
const MotionHeader = motion(HeaderContainer);
const NAV_LINK_STYLES = `
    decoration-orange-600 
    hover:opacity-[0.4]
    hover:underline 
    hover:underline-offset-[6px] 
    hover:decoration-[4px] 
    hover:decoration-amber-500 
    transition-all duration-300
`;

export default function Header() {
  const router = useRouter();
  const NAVIGATIONS = [
    { label: "HOME", path: "/" },
    { label: "MANAGE", path: "/manage" },
    { label: "BROWSE", path: "/browse" },
    { label: "REPORT", path: "/report" },
  ];

  // execute changes on scrolling
  const [scrollStyles, setScrollStyles] = useState({});
  useEffect(() => {
    const handleScroll = () => {
      // change style depending on scroll position
      if (window.scrollY > 40) {
        setScrollStyles({
          boxShadow: "0 5px 5px -2px rgba(219, 219, 219, 0.6)",
          backdropFilter: "saturate(120%) blur(5px)",
          padding: "0.75rem 2rem",
        });
      } else {
        setScrollStyles({});
      }
    };

    // attach scrolling listener
    window.addEventListener("scroll", handleScroll);

    // clean scrolling listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MotionHeader
      style={scrollStyles}
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* logo on the left side */}
      <div className="h-[60px] w-[75px]">
        <Link href="/">
          <Image
            src={LogoMajorBg}
            alt="Major logo img at menu bar"
            className="
            object-cover w-full h-full 
            hover:scale-110"
          />
        </Link>
      </div>

      {/* nav items + (sign in / sign up || profile pic + name) on the right sides */}
      <div className="flex flex-row justify-around items-center">
        <ul className="flex gap-10">
          {NAVIGATIONS.map(({ path, label }) => (
            <Link
              key={label}
              href={path}
              className={`${router.pathname === path && "text-amber-500"} ${NAV_LINK_STYLES}`}
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
    </MotionHeader>
  );
}
