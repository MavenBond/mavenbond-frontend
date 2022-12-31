import dynamic from "next/dynamic";
import Router from "next/router";
import styled from "styled-components";
import tw from "twin.macro";
import { z } from "zod";

// IMP: make it dynamic to take advantage of styled component passRef
const Button = dynamic(() => import("components/ui/Button"));
const TailSpin = dynamic(() => import("react-loader-spinner").then((rs) => rs.TailSpin));
const StyledButton = styled(Button)`
  ${tw`
  w-[110px] h-[45px]
  text-white
  bg-gradient-to-r from-orange-600 to-amber-500
  hover:shadow-amber-500
  `}
`;

const onClickZod = z.function();
type onClickType = z.infer<typeof onClickZod>;

type LoginButtonProps = {
  text?: string;
  isLoading?: boolean;
  className?: string;
  onClick?: onClickType;
};

const LoginButton = ({
  className = "",
  text = "LOGIN",
  isLoading = false,
  onClick = undefined,
}: LoginButtonProps) => {
  return (
    <StyledButton
      disabled={isLoading}
      className={className}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick={(e: any) => {
        !onClick && Router.push("/login");
        onClick && onClick(e);
      }}
    >
      {!isLoading && text}
      {isLoading && (
        <TailSpin
          height='25'
          width='25'
          color='#fff'
          ariaLabel='tail-spin-loading'
          radius='2'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      )}
    </StyledButton>
  );
};

export default LoginButton;
