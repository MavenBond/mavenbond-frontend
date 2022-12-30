import styled from "styled-components";
import tw from "twin.macro";

export const LoginWrapper = styled.div`
  .container-extra {
    ${tw`
      border-l-[10px]
      md:border-l-[20px] lg:border-l-[20px] xl:border-l-[20px]
      border-double border-amber-500
    `}
  }

  .main-form {
    ${tw`
      xs:w-[350px] sm:w-[350px]
      md:w-[600px] lg:w-[600px] xl:w-[600px] 
      my-auto mx-auto pt-[2rem] px-4
      select-none flex flex-col
      xs:scale-[0.8] sm:scale-[0.8]
    `}
  }

  .copyright {
    ${tw`
      lg:absolute lg:bottom-[2rem] lg:right-[2rem]
      xl:absolute xl:bottom-[2rem] xl:right-[2rem]
      self-center mt-[2rem]
      text-[1.15rem] text-[#0d1626] dark:text-white
      xs:text-[0.8rem] sm:text-[0.8rem]
    `}
  }
`;
