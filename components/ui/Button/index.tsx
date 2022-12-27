import z from "zod";

const onClickZod = z.function();
type onClickType = z.infer<typeof onClickZod>;

type ButtonProps = {
  className?: string;
  disabled?: boolean;
  onClick?: onClickType;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  className = "",
  disabled = false,
  onClick = undefined,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-md
        border-none 
        transition-all duration-500
        hover:shadow-[0_8px_18px_-5px_rgba(255,255,255,0)]
        ${disabled && "cursor-not-allowed bg-gray-400 hover:bg-gray-400 hover:shadow-none"}
        ${className}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
