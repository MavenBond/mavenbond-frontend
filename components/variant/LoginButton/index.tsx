import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styled from "styled-components";
import tw from "twin.macro";
import z from "zod";

// IMP: make it dynamic to take advantage of styled component passRef
const StyledButton = dynamic(() => {
  return import("components").then((result) => {
    const StyledButton = styled(result.UIComponents.Button)`
      ${tw`
      w-[110px] h-[45px]
      text-white
      bg-gradient-to-r from-orange-600 to-amber-500
      hover:shadow-amber-500
      `}
    `;
    return StyledButton;
  });
});

const onClickZod = z.function();
type onClickType = z.infer<typeof onClickZod>;

type LoginButtonProps = {
  text?: string;
  className?: string;
  onClick?: onClickType;
};

const LoginButton = ({ className = "", text = "LOGIN", onClick = undefined }: LoginButtonProps) => {
  const router = useRouter();
  return (
    <StyledButton
      className={className}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick={(e: any) => {
        !onClick && router.push("/login");
        onClick && onClick(e);
      }}
    >
      {text}
    </StyledButton>
  );
};

export default LoginButton;
