import { useEffect, useState } from "react";

// components
import { ROUTES } from "routes";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";

// hooks
import useScrollPosition from "@react-hook/window-scroll";
import { useWindowWidth } from "@react-hook/window-size/throttled";

// constants
import { ColorScheme } from "consts";
import { useTheme } from "next-themes";
import { Client } from "react-hydration-provider";
import dynamic from "next/dynamic";

const Link = dynamic(() => import("next/link"));
const ThemeToggler = dynamic(() => import("components/ui/ThemeToggler"));
const NotiBell = dynamic(() => import("components/ui/NotiBell"));

const Header = () => {
  // window width tracking
  const windowWidth = useWindowWidth();

  // execute style changes on scrolling
  const scrollY = useScrollPosition(60 /*frames per second*/);
  const [scrollStyles, setScrollStyles] = useState({});
  const [isNavShown, setIsNavShown] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    if (scrollY <= 40) {
      setScrollStyles({});
      return;
    }
    setScrollStyles({
      boxShadow: "0 10px 10px -10px rgba(251, 191, 56, 0.3)",
      backdropFilter: "saturate(120%) blur(10px)",
    });
  }, [windowWidth, scrollY]);

  return (
    <Client>
      <div
        style={scrollStyles}
        className='
            navbar bg-base-100 fixed z-[200] py-[1.1rem] px-[1.5rem]
            transition-all duration-500 bg-transparent
          '
        data-theme={theme === "light" ? "lofi" : "halloween"}
      >
        <div className='navbar-start pt-2'>
          <NotiBell hasNoti textClass={`text-[${ColorScheme.blue.dark}] dark:text-amber-500`} />
        </div>
        <div className='navbar-center'>
          <Link href='/' prefetch={false}>
            <h1
              className='
                text-[1.6rem] mt-1 font-semibold text-amber-500 select-none
                md:text-[2rem] lg:text-[2.25rem] xl:text-[2.25rem]
              '
            >
              MAVENBOND
            </h1>
          </Link>
        </div>
        <div className='navbar-end'>
          <button
            aria-label='navbar-toggler'
            className='btn btn-circle btn-ghost mt-1'
            onClick={() => setIsNavShown(!isNavShown)}
          >
            {!isNavShown && <Bars4Icon className='h-8 w-8' />}
            {isNavShown && <XMarkIcon className='h-8 w-8' />}
          </button>
          {isNavShown && (
            <ul
              tabIndex={0}
              className='
                  menu menu-compact
                  absolute top-[3rem] right-[2.75rem]
                  bg-base-100 shadow-md
                  flex flex-col items-center justify-center 
                  gap-2 p-5 transition-all duration-300
                  rounded-box w-[14rem]
                '
            >
              {Object.values(ROUTES).map(({ displayName, path }) => (
                <Link
                  prefetch={false}
                  key={displayName}
                  href={path}
                  className={`
                  ${window.location.pathname === path && "text-amber-500"}
                  ${
                    window.location.pathname !== path &&
                    `text-[${ColorScheme.blue.dark}] dark:text-white`
                  }
                `}
                >
                  <li className='hover:opacity-40'>
                    <span className='px-10 text-lg'>{displayName}</span>
                  </li>
                </Link>
              ))}
              <div className='divider m-0'></div>
              <ThemeToggler
                extraSunClass='text-amber-500 self-center'
                extraMoonClass='text-[rgba(124,58,237,1)] self-center'
              />
            </ul>
          )}
        </div>
      </div>
    </Client>
  );
};

export default Header;
