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
  size
  align
  line height, letter spacing
  spacing
  responsive
*/

export const StyledWrapper = styled.div`
  .container {
    ${tw`
      relative
      h-screen max-w-full
      flex flex-col
      mx-auto
      overflow-hidden
      lg:flex-row xl:flex-row
      bg-transparent dark:bg-[#0d1626] 
      text-[#0d1626] dark:text-white
    `}
  }
`;
