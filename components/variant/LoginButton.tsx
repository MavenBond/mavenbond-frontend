import dynamic from "next/dynamic";
import Link from "next/link";

const Button = dynamic(() => import("components/common/Button"));

type Props = {
  className?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};

const LoginButton = ({
  className = "",
  children = null,
  isLoading = false,
  onClick = undefined,
}: Props) => {
  // common function for all logon buttons
  const commonWork = () => {
    console.log("LOGIN COMMON");
  };

  // if there is no onClick defined when this button is used
  // then it will lead to Login Page only
  return onClick ? (
    <Button
      isLoading={isLoading}
      onClick={() => {
        commonWork();
        onClick();
      }}
      className={`font-bold ${className}`}
    >
      {children}
    </Button>
  ) : (
    <Link href='login'>
      <Button className={`font-bold ${className}`}>{children}</Button>
    </Link>
  );
};

export default LoginButton;
