type InputProps = {
  id: string;
  label: string;
  htmlFor: string;
  className?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValue?: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const _RAND_VAL = `${Date.now() * Math.random()}`;

const Input = ({
  id = _RAND_VAL,
  htmlFor = _RAND_VAL,
  label = "Default Label",
  className = "",
  placeholder = "Type here",
  type = "text",
  required = false,
  initialValue = "",
  ...rest
}: InputProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        font-[700] text-[1.1rem] 
        flex flex-col gap-2 w-full
        ${className}
        `}
    >
      <span className='pl-5'>
        {label}
        {required && <span className='text-red-400'> * </span>}
      </span>
      <input
        id={id}
        className='
          bg-white
          input
          input-bordered 
          input-primary 
          px-5 bg-opacity-10
          w-full rounded-[2rem]
        '
        type={type}
        placeholder={placeholder}
        defaultValue={initialValue}
        {...rest.register}
      />
    </label>
  );
};

export default Input;
