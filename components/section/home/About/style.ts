import styled from "styled-components";
import tw from "twin.macro";

export const AboutWrapper = styled.div`
  ${tw`
  h-[calc(100vh_-_75px)] min-h-[calc(100vh_-_75px)]
  select-none overflow-hidden
  border-double relative
  border-b-[10px] lg:border-r-[15px] lg:border-b-0 
  border-[rgb(236,44,108)] dark:border-[rgb(238,60,119)]
  `}
`;
