import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { ROUTES } from "routes";
import { signOut } from "supabase/supbaseClient";
import { useAuth } from "context/useAuth";
import { happy } from "utils/toaster";
import NavStyles from "styles/Navbar.module.css";

const ThemeToggle = dynamic(() => import("components/common/ThemeToggle"));
const NotiBell = dynamic(() => import("components/common/NotiBell"));
const LoginButton = dynamic(() => import("components/variant/LoginButton"));

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <nav
      style={{
        backdropFilter: "saturate(110%) blur(5px)",
      }}
      className={NavStyles.navContainer}
    >
      {/* NAV START */}
      <div id='nav-start' className='flex items-center gap-2'>
        {/* MOBILE menu and menu icon */}
        <ul className='menu menu-horizontal block lg:hidden ml-2'>
          <li>
            <div>
              <Bars4Icon aria-label='navbar-toggler' className='h-8 w-8' />
            </div>
            <ul className='px-6 py-4 bg-base-100 shadow-lg'>
              {Object.values(ROUTES)
                .filter((_, idx) => (isAuthenticated ? idx !== 0 : idx !== 1))
                .map(({ path, displayName }) => (
                  <li
                    key={path}
                    className={`
                      ${NavStyles.mobileMenuItems}
                      ${window.location.pathname === path && "text-amber-500"}
                    `}
                  >
                    <Link className='flex items-center justify-center' href={path}>
                      {displayName}
                    </Link>
                  </li>
                ))}

              <div className='divider my-2' />

              {/* MOBILE LOGIN button */}
              <LoginButton className={NavStyles.mobileLoginBtn}>LOGIN</LoginButton>

              <div className='divider my-2' />
              <div className='flex items-center justify-center'>
                <ThemeToggle
                  extraSunClass='text-amber-500'
                  extraMoonClass='text-[rgba(124,58,237,1)]'
                />
              </div>
            </ul>
          </li>
        </ul>

        {/* MOBILE noti */}
        <NotiBell hasNoti className='lg:hidden block' />

        {/* DESKTOP logo */}
        <h1 className='hidden lg:block text-2xl lg:text-3xl font-bold text-amber-500'>
          <Link href='/'>MAVENBOND</Link>
        </h1>
      </div>

      {/* NAV END */}
      <div id='nav-end' className='flex justify-between items-center gap-6'>
        {/* LOGOUT button */}
        <button
          onClick={async () => {
            await signOut();
            await happy("Logged out. See ya!");
            await setTimeout(() => {
              window.location.pathname = "/";
            }, 1500);
          }}
        >
          LOGOUT
        </button>

        {/* DESKTOP menu and menu items + theme toggle + noti bell */}
        <ul className='hidden lg:flex items-center justify-between gap-2'>
          {Object.values(ROUTES)
            .filter((_, idx) => (isAuthenticated ? idx !== 0 : idx !== 1))
            .map(({ path, displayName }) => (
              <Link
                href={path}
                key={path}
                className={`
                ${NavStyles.desktopMenuItems}
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

        {/* DESKTOP LOGIN button */}
        <LoginButton className={NavStyles.desktopLoginBtn}>LOGIN</LoginButton>

        {/* MOBILE logo */}
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
