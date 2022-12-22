import z from "zod";

const onClickZod = z.function();
type onClickType = z.infer<typeof onClickZod>;

type ButtonProps = {
  dimensionClass?: string;
  shadowClass?: string;
  textBgClass?: string;
  disabled?: boolean;
  onClick?: onClickType;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  dimensionClass = "",
  shadowClass = "",
  textBgClass = "",
  disabled = false,
  onClick = undefined,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-md
        border-none hover:border-none 
        transition-all duration-500
        hover:shadow-[0_8px_18px_-5px_rgba(255,255,255,0)] 
        ${dimensionClass}
        ${textBgClass}
        ${!disabled && shadowClass}
        ${disabled && "cursor-not-allowed bg-gray-400 hover:bg-gray-400 hover:shadow-none"}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
