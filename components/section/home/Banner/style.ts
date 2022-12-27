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

export const BannerWrapper = styled.div`
  ${tw`select-none`}

  .title {
    ${tw`
    h-full w-full flex-1 z-20
    flex flex-col items-center justify-center gap-6
    md:order-2 md:pb-[4rem]
    lg:gap-8 xl:gap-14
    `}
  }

  .hero {
    ${tw`
    h-full w-full flex-1 z-20
    flex flex-col items-center justify-center
    xs:hidden sm:hidden md:order-1 md:mt-[7rem]
    `}
  }

  .title h1,
  .title span,
  .title p {
    ${tw`
    text-[rgb(236,44,108)] dark:text-[rgb(238,60,119)]
    tracking-wide
    `}
  }

  .title h1 {
    ${tw`
    text-[3rem]
    text-center
    leading-[4rem]
    px-5

    lg:px-20 xl:px-20
    lg:text-[3rem] xl:text-[5.75rem]
  `}
  }

  .title span {
    ${tw`
    text-[3.5rem]
    font-[700]
    text-center
    leading-[3rem]

    lg:text-[3.75rem] xl:text-[6.5rem]
    lg:leading-[6rem] xl:leading-[11rem]
  `}
  }

  .title h2 {
    ${tw`
    text-[1.2rem]
    font-[600]
    text-center
    leading-[3rem]
    px-8

    lg:leading-[2rem]
    lg:text-[1.15rem] xl:text-[1.6rem]
    lg:px-[7rem] xl:px-[7rem]
  `}
  }
`;
