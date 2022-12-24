import styled from "styled-components";
import tw from "twin.macro";

export const BannerWrapper = styled.div`
  ${tw`
    h-[calc(100vh_-_95px)] select-none 
    flex gap-5 lg:gap-10 lg:justify-between
    lg:border-l-[10px] lg:border-[rgb(236,44,108)] dark:lg:border-[rgb(238,60,119)]

    max-[1024px]:flex-col-reverse
    `}
`;

export const TypographyCol = styled.div`
  ${tw`
    w-full lg:w-[46%] flex-1
    px-0 lg:pr-10 lg:pl-20
    flex flex-col gap-8 justify-center items-start  
    md:border-x-0
    border-double lg:border-l-[30px] 
    border-[rgb(236,44,108)] dark:border-[rgb(238,60,119)]

    max-[768px]:px-14
    max-[768px]:border-x-[10px]
    `}
`;

export const MainTitle = styled.h1`
  ${tw`
    text-[3rem] lg:text-[4rem] text-center font-[500]
    text-[rgb(236,44,108)] dark:text-[rgb(238,60,119)] 
    tracking-wide break-words leading-[6rem] lg:leading-[7.25rem]

    min-[350px]:self-center
    min-[768px]:leading-[2rem]
    min-[1400px]:text-[6rem]
    `}

  .highlight {
    ${tw`font-[700] text-[3.75rem] lg:text-[5.5rem] min-[1400px]:text-[6.25rem]`}
  }
`;

export const SubTitle = styled.h2`
  ${tw`
    text-[1.25rem] text-center font-[600] 
    px-[5px] lg:px-2
    break-words leading-[3rem]

    min-[350px]:self-center
    min-[1400px]:text-[1.6rem]
    min-[1400px]:px-10
    `}
`;
