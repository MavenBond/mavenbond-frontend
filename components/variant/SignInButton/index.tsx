import dynamic from "next/dynamic";
import styled from "styled-components";
import tw from "twin.macro";
import z from "zod";

const StyledButton = dynamic(() => {
  return import("components").then((result) => {
    const StyledButton = styled(result.UIComponents.Button)`
      ${tw`
      w-[110px] h-[45px]
      text-white rounded-lg
      bg-gradient-to-r from-orange-600 to-amber-500
      hover:shadow-amber-500
      `}
    `;
    return StyledButton;
  });
});

const onClickZod = z.function();
type onClickType = z.infer<typeof onClickZod>;

type SignInButtonProps = {
  text?: string;
  className?: string;
  onClick?: onClickType;
};

const SignInButton = ({
  className = "",
  text = "SIGN IN",
  onClick = undefined,
}: SignInButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default SignInButton;
