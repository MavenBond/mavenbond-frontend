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
  const commonWork = () => {
    console.log("LOGIN COMMON");
  };

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
