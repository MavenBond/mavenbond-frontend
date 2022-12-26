import styled from "styled-components";
import tw from "twin.macro";

export const BannerWrapper = styled.div`
  ${tw`
    h-[calc(100vh_-_95px)] min-h-[calc(100vh_-_95px)] 
    select-none overflow-auto
    flex gap-5 lg:gap-10 lg:justify-between

    max-[1024px]:flex-col-reverse
    `}
`;

export const TypographyCol = styled.div`
  ${tw`
    w-full lg:w-[46%] flex-1
    px-0 lg:pr-10 lg:pl-20 z-20
    flex flex-col gap-8 justify-center items-start  
    md:border-x-0
    border-double rounded-b-[2rem] lg:border-l-[25px] 
    border-[rgb(236,44,108)] dark:border-[rgb(238,60,119)]

    max-[768px]:border-b-[10px]
    `}
`;

export const MainTitle = styled.h1`
  ${tw`
    lg:text-[4rem] text-center font-[500] px-10
    text-[rgb(236,44,108)] dark:text-[rgb(238,60,119)] 
    tracking-wide break-words leading-[5rem] lg:leading-[7.25rem]

    min-[350px]:self-center
    max-[639px]:text-[2.75rem]
    sm:text-[3.25rem]
    min-[640px]:leading-[4rem]
    min-[1400px]:text-[6rem]
    `}

  .highlight {
    ${tw`
    font-[700] text-[3.75rem] lg:text-[5.5rem] 
    
    max-[639px]:text-[3.25rem]
    sm:text-[3.75rem]
    min-[1400px]:text-[6.25rem]
    `}
  }
`;

export const SubTitle = styled.h2`
  ${tw`
    text-center font-[600] 
    px-[2rem] lg:px-2
    break-words leading-[3rem]

    min-[350px]:self-center
    max-[639px]:text-[1.25rem]
    sm:text-[1.75rem]
    min-[1400px]:text-[1.6rem]
    min-[1400px]:px-10
    `}
`;
