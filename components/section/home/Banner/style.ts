import styled from "styled-components";
import tw from "twin.macro";

export const BannerWrapper = styled.div`
  ${tw`
    h-[calc(100vh_-_95px)] select-none 
    flex gap-10 justify-between
    border-l-[10px] border-[rgb(236,44,108)] dark:border-[rgb(238,60,119)]
    `}
`;

export const TypographyCol = styled.div`
  ${tw`
    w-[46%] pr-10 pl-20
    flex flex-col gap-8 justify-center items-start  
    border-double border-l-[30px] border-[rgb(236,44,108)] dark:border-[rgb(238,60,119)]
    `}

  .highlight {
    ${tw`font-[700] text-[6.25rem]`}
  }
`;

export const MainTitle = styled.h1`
  ${tw`
    text-[6rem] text-center font-[500]
    text-[rgb(236,44,108)] dark:text-[rgb(238,60,119)] 
    tracking-wide break-words leading-[7.25rem]
    `}
`;

export const SubTitle = styled.h2`
  ${tw`
    text-[1.6rem] text-center font-[600] 
    px-10
    break-words leading-[3rem]
    `}
`;
