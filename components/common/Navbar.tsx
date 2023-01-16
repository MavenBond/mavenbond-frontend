import { Bars4Icon } from "@heroicons/react/24/solid";
import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FALLBACK_PROFILE_URL } from "projConstants";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { ROUTES } from "routes";
import NavStyles from "styles/Navbar.module.css";
import { signOut } from "supabase/supbaseClient";
import { happy } from "utils/toaster";

const ThemeToggle = dynamic(() => import("components/common/ThemeToggle"));
const NotiBell = dynamic(() => import("components/common/NotiBell"));
const LoginButton = dynamic(() => import("components/variant/LoginButton"));

const logOut = async () => {
  await happy("Logged out. See ya!");
  await signOut();
  setTimeout(() => {
    window.location.pathname = "/";
  }, 500);
};

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, profile } = useAuth();
  const INIT_AVATAR_URL = profile?.avatar_url as string;
  const [avatarUrl, setAvatarUrl] = useState<string>(INIT_AVATAR_URL);
  const [isDownloading, setIsDownloading] = useState<boolean>(true);

  useEffect(() => {
    setMounted(true);
    (async () => {
      if (INIT_AVATAR_URL && !INIT_AVATAR_URL.startsWith("http")) {
        const _downloadImage = await (await import("utils/profile"))._downloadImage;
        _downloadImage(INIT_AVATAR_URL, (imgUrl) => {
          setAvatarUrl(imgUrl);
          setIsDownloading(false);
        });
      } else setIsDownloading(false);
    })();
  }, [INIT_AVATAR_URL]);

  if (!mounted) return null;
  return (
    <nav
      style={{
        backdropFilter: "saturate(110%) blur(5px)",
      }}
      className={`dark:shadow-gray-200/30 ${NavStyles.navContainer}`}
    >
      {/* NAV START */}
      <div id='nav-start' className='flex items-center gap-2'>
        {/* Logo */}
        <h1 className='pl-5 text-2xl font-bold lg:pl-0 lg:text-3xl text-amber-500'>
          <Link href='/'>MAVENBOND</Link>
        </h1>
      </div>

      {/* NAV END */}
      <div id='nav-end' className='flex items-center justify-between gap-6'>
        {/* DESKTOP menu and menu items + theme toggle + noti bell */}
        <ul className='items-center justify-between hidden gap-4 lg:flex'>
          {Object.values(ROUTES)
            .filter((_, idx) => (isAuthenticated ? idx !== 0 : idx === -1))
            .map(({ path, displayName }) => (
              <Link
                href={path}
                key={path}
                className={`
                font-bold text-[1.1rem]
                ${NavStyles.desktopMenuItems}
                ${window.location.pathname === path && `text-amber-500`}
              `}
              >
                <li>{displayName}</li>
              </Link>
            ))}
        </ul>
        {isAuthenticated && <NotiBell hasNoti className='hidden lg:block' />}
        <ThemeToggle
          className='hidden lg:block'
          extraSunClass='text-amber-500'
          extraMoonClass='text-[rgba(124,58,237,1)]'
        />
        {/* DESKTOP LOGIN button */}
        {!isAuthenticated && <LoginButton className={NavStyles.desktopLoginBtn}>LOGIN</LoginButton>}
        {isAuthenticated && (
          <div className='dropdown dropdown-bottom dropdown-end'>
            <label
              tabIndex={0}
              className='btn btn-circle relative
              w-14 h-14 ml-5 hidden lg:block
              border-[2px] overflow-hidden bg-amber-500
              border-amber-500'
            >
              {isDownloading && (
                <TailSpin
                  height='50'
                  width='50'
                  color='#fff'
                  ariaLabel='tail-spin-loading'
                  radius='2'
                  wrapperStyle={{}}
                  wrapperClass='self-center mx-auto'
                  visible={true}
                />
              )}
              {!isDownloading && (
                <Image
                  alt='Navbar: profile picture with drop down menu'
                  src={avatarUrl || FALLBACK_PROFILE_URL}
                  className='object-cover'
                  fill
                  sizes='(max-width: 768px) 300px,
                  (max-width: 1200px) 400px'
                />
              )}
            </label>
            <ul
              tabIndex={0}
              className='p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52'
            >
              <div className='flex items-center px-3 py-3 text-[1.2rem]'>
                <strong>Hi, {profile?.full_name}</strong>
              </div>

              <div className='m-0 divider' />

              <li>
                <button onClick={logOut}>Log Out</button>
              </li>
            </ul>
          </div>
        )}

        <div className='flex items-center justify-center'>
          {/* MOBILE noti */}
          {isAuthenticated && <NotiBell hasNoti className='block mr-5 lg:hidden' />}
          <ThemeToggle
            className='block lg:hidden'
            extraSunClass='text-amber-500'
            extraMoonClass='text-[rgba(124,58,237,1)]'
          />

          {/* MOBILE menu and menu icon */}
          <ul className='block ml-2 menu menu-horizontal lg:hidden'>
            <li>
              <div>
                <Bars4Icon aria-label='navbar-toggler' className='w-8 h-8' />
              </div>
              <ul className='px-6 py-4 bg-base-100 shadow-lg -translate-x-[9rem]'>
                {Object.values(ROUTES)
                  .filter((_, idx) => (isAuthenticated ? idx !== 0 : idx === -1))
                  .map(({ path, displayName }) => (
                    <li
                      key={path}
                      className={`
                      font-bold
                      ${NavStyles.mobileMenuItems}
                      ${window.location.pathname === path && "text-amber-500"}
                    `}
                    >
                      <Link className='flex items-center justify-center' href={path}>
                        {displayName}
                      </Link>
                    </li>
                  ))}

                {/* MOBILE LOGIN button */}
                <div className='my-2 divider' />
                <LoginButton
                  onClick={isAuthenticated ? logOut : undefined}
                  className={NavStyles.mobileLoginBtn}
                >
                  {isAuthenticated ? "Log Out" : "LOGIN"}
                </LoginButton>

                <div className='my-2 divider' />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
