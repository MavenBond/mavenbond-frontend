import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { ROUTES } from "routes";
import { signOut } from "supabase/supbaseClient";

const ThemeToggle = dynamic(() => import("components/common/ThemeToggle"));
const NotiBell = dynamic(() => import("components/common/NotiBell"));
const LoginButton = dynamic(() => import("components/variant/LoginButton"));

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <nav
      style={{
        backdropFilter: "saturate(110%) blur(5px)",
      }}
      className='
        w-full transition-shadow duration-500
        flex justify-between items-center
        shadow-md dark:shadow-[0_10px_10px_-10px_rgba(251,191,56,0.6)]
        fixed top-0 z-[100]
        lg:px-10 py-2 lg:py-4
    '
    >
      <div id='nav-start' className='flex items-center gap-2'>
        {/* mobile menu and menu icon */}
        <ul className='menu menu-horizontal block lg:hidden ml-2'>
          <li>
            <div>
              <Bars4Icon aria-label='navbar-toggler' className='h-8 w-8' />
            </div>
            <ul className='px-6 py-4 bg-base-100 shadow-lg'>
              {Object.values(ROUTES).map(({ path, displayName }) => (
                <li
                  key={path}
                  className={`w-36 h-12
                  hover:bg-gray-400/40 hover:dark:bg-gray-200/40 hover:opacity-60 
                    rounded-md cursor-pointer
                    ${window.location.pathname === path && "text-amber-500"}
                  `}
                >
                  <Link className='flex items-center justify-center' href={path}>
                    {displayName}
                  </Link>
                </li>
              ))}

              <div className='divider my-2'></div>
              {/* LOGIN button */}
              <LoginButton
                className='text-[#0d1626] w-36 h-10 
                bg-amber-500 rounded-md
                hover:shadow-xl hover:shadow-amber-500/40
                transition-shadow duration-500'
              >
                LOGIN
              </LoginButton>

              <div className='divider my-2'></div>
              <div className='flex items-center justify-center'>
                <ThemeToggle
                  extraSunClass='text-amber-500'
                  extraMoonClass='text-[rgba(124,58,237,1)]'
                />
              </div>
            </ul>
          </li>
        </ul>

        {/* mobile noti */}
        <NotiBell hasNoti className='lg:hidden block' />

        {/* desktop logo */}
        <h1 className='hidden lg:block text-2xl lg:text-3xl font-bold text-amber-500'>
          <Link href='/'>MAVENBOND</Link>
        </h1>
      </div>

      <div id='nav-end' className='flex justify-between items-center gap-6'>
        <button
          onClick={async () => {
            await signOut();
            window.location.reload();
          }}
        >
          LOGOUT
        </button>

        {/* desktop menu and menu items + theme toggle + noti bell */}
        <ul className='hidden lg:flex items-center justify-between gap-2'>
          {Object.values(ROUTES).map(({ path, displayName }) => (
            <Link
              href={path}
              key={path}
              className={`w-24 h-12
                hover:bg-gray-400/40 hover:dark:bg-gray-200/40 hover:opacity-60
                flex justify-center items-center rounded-md
                cursor-pointer
                ${window.location.pathname === path && "text-amber-500"}
              `}
            >
              <li>{displayName}</li>
            </Link>
          ))}
        </ul>

        <NotiBell hasNoti className='hidden lg:block' />
        <ThemeToggle
          className='hidden lg:block'
          extraSunClass='text-amber-500'
          extraMoonClass='text-[rgba(124,58,237,1)]'
        />

        {/* LOGIN button */}
        <LoginButton
          className='text-[#0d1626] w-28 h-10 hidden lg:block 
          bg-amber-500 rounded-md
          hover:shadow-xl hover:shadow-amber-500/40
          transition-shadow duration-300'
        >
          LOGIN
        </LoginButton>

        {/* mobile logo */}
        <h1
          className='block lg:hidden text-2xl lg:text-3xl 
          font-bold text-amber-500 pr-5'
        >
          <Link href='/'>MAVENBOND</Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
