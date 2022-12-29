import styled from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.header`
  ${tw`
  text-[rgb(13, 22, 38)] bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(13, 22, 38, 0.8)]
  sticky top-0 py-6 px-5 xl:px-10 z-[100] rounded-b-md
  flex justify-between items-center
  transition-all duration-300
  `}
`;

export const NavLinksWrapper = styled.ul`
  ${tw`
  transition-all duration-300
  w-screen
  bg-white dark:bg-[rgb(13, 22, 38)]
  absolute top-[60px] py-10 left-0 z-10
  text-center flex flex-col gap-8 select-none 
  shadow-[0_5px_5px_-2px_rgba(251, 191, 56, 0.3)] 
  rounded-b-md

  lg:shadow-[0_5px_5px_-2px_rgba(219, 219, 219, 0)]
  lg:relative lg:flex-row lg:top-0 lg:px-0 lg:py-0 lg:w-full

  // very important
  lg:bg-white lg:bg-[rgba(255,255,255,0)] 
  lg:dark:bg-[rgb(13, 22, 38)] lg:dark:bg-[rgba(13, 22, 38, 0)] 

  xl:shadow-[0_5px_5px_-2px_rgba(219, 219, 219, 0)]
  xl:relative xl:flex-row xl:top-0 xl:px-0 xl:py-0 xl:w-full

  // very important
  xl:bg-white xl:bg-[rgba(255,255,255,0)] 
  xl:dark:bg-[rgb(13, 22, 38)] xl:dark:bg-[rgba(13, 22, 38, 0)] 
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
