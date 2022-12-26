import { UIComponents } from "components";
import z from "zod";

const onClickZod = z.function();
type onClickType = z.infer<typeof onClickZod>;

type SignInButtonProps = {
  text?: string;
  dimensionClass?: string;
  extraTextBgClass?: string;
  extraShadowClass?: string;
  selfCenter?: boolean;
  onClick?: onClickType;
};

const SignInButton = ({
  text = "SIGN IN",
  dimensionClass = "",
  extraTextBgClass = "",
  extraShadowClass = "",
  selfCenter = true,
  onClick = undefined,
}: SignInButtonProps) => {
  // destruct components
  const { Button } = UIComponents;

  return (
    <Button
      onClick={onClick}
      dimensionClass={`
        w-[110px] h-[45px]
        ${dimensionClass}
        ${selfCenter && "self-center"}
      `}
      textBgClass={`text-white rounded-lg
        bg-gradient-to-r from-orange-600 to-amber-500
        ${extraTextBgClass}`}
      shadowClass={`hover:shadow-amber-500 ${extraShadowClass}`}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
