import dynamic from "next/dynamic";
const TailSpin = dynamic(() => import("react-loader-spinner").then((rs) => rs.TailSpin));

type ButtonProps = {
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  isLoading?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  className = "",
  ariaLabel = "",
  disabled = false,
  isLoading = false,
  onClick = undefined,
  children,
}) => {
  return (
    <button
      aria-label={ariaLabel}
      disabled={isLoading}
      onClick={onClick}
      className={`
        border-none
        hover:shadow-[0_8px_18px_-5px_rgba(255,255,255,0)]
        ${disabled && "cursor-not-allowed bg-gray-400 hover:bg-gray-400 hover:shadow-none"}
        ${isLoading && "cursor-not-allowed bg-gray-400 hover:shadow-none"}
        ${className}
    `}
    >
      {!isLoading && children}
      {isLoading && (
        <TailSpin
          height='25'
          width='25'
          color='#fff'
          ariaLabel='tail-spin-loading'
          radius='2'
          wrapperStyle={{}}
          wrapperClass='self-center'
          visible={true}
        />
      )}
    </button>
  );
};

export default Button;
