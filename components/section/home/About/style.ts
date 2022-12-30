import styled from "styled-components";
import tw from "twin.macro";

/*
  position
  dimension
  display
  spacing
  overflow
  colors
  responsive
*/

/*
  colors
  size
  weight
  align
  letter spacing, line height
  spacing
  responsive
*/

export const AboutWrapper = styled.div`
  .about {
    ${tw`
    h-full w-full flex-1 z-20 gap-10 scale-[0.8]
    flex flex-col items-center justify-center

    md:gap-4
  `}

    h2 {
      ${tw`
      text-[3.3rem] font-[600]
      text-amber-500 z-20 
      xs:hidden sm:hidden
      `}
    }
  }

  .special {
    ${tw`relative xs:hidden sm:hidden md:hidden`}

    .logo-container {
      ${tw`
      absolute left-[1rem] top-1/3
      flex justify-center items-center
      w-[7rem] h-[7rem]
      rounded-full z-30 bg-gray-200/30
      `}
    }

    .celeb-vertical {
      ${tw`
          absolute overflow-hidden
          lg:right-0 lg:bottom-[25%]
          xl:right-0 xl:bottom-[12%]
          lg:h-[14rem] lg:w-[14rem]
          xl:h-[22rem] xl:w-[22rem]
          rounded-full z-40
          border-[1.25rem] border-gray-200/40
          xs:hidden sm:hidden md:hidden
      `}
    }
  }

  .logo-container {
    ${tw`
    flex justify-center items-center
    w-[6.9rem] h-[6.9rem]
    rounded-full z-30 bg-gray-200/30

    md:hidden lg:hidden xl:hidden
    `}
  }

  .first-content {
    ${tw`
      text-[1.34rem]
      text-justify
      tracking-wide
      px-5

      xs:hidden sm:hidden
    `}
  }

  .second-content {
    ${tw`
      text-[1.34rem]
      text-justify
      tracking-wide
      px-5
    `}
  }

  strong {
    ${tw`text-[1.6rem] text-[rgb(236,44,108)] dark:text-[rgb(238,60,119)]`}
  }
`;
