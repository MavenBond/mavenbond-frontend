import dynamic from "next/dynamic";
import { LOGIN_FORM_MODEL } from "consts";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import type { Dispatch, SetStateAction } from "react";

const Input = dynamic(() => import("components/bypage/login/Input"));
const SignInButton = dynamic(() => import("components/variant/LoginButton"));

type flagsType = { hasAccount: boolean; isSubmitting: boolean };
type formMethodsType = {
  handleSubmitData: (data: FieldValues) => void;
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;
};
type FormProps = { flags: flagsType; formMethods: formMethodsType };

const Form = ({ flags, formMethods }: FormProps) => {
  // comp destruct
  const { register, handleSubmit } = useForm();
  const { handleSubmitData, setIsSubmitting } = formMethods;
  const { hasAccount, isSubmitting } = flags;

  return (
    <form
      onSubmit={handleSubmit((data: FieldValues) => handleSubmitData(data))}
      className='flex flex-col gap-[1.2rem] items-center justify-center'
    >
      <button className='btn btn-primary w-full mb-4 mt-2 rounded-[10rem]'>
        <FcGoogle className='mr-2 text-[1.5rem]' />
        <span>{hasAccount ? "Sign In with Google" : "Sign Up with Google"}</span>
      </button>
      <div className='divider text-[#0d1626] dark:text-white bg-opacity-0 m-0'>OR</div>

      {/* form fields */}
      {LOGIN_FORM_MODEL.map(({ id, label, type, placeholders }) => {
        const [primary, secondary] = placeholders;
        return (
          <Input
            key={id}
            id={id}
            htmlFor={id}
            register={{ ...register(id) }}
            label={label}
            type={type}
            placeholder={hasAccount ? primary : secondary || primary}
          />
        );
      })}

      {/* loading indicator & login button */}
      <SignInButton
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        text={hasAccount ? "LOGIN" : "SIGN UP"}
        className='my-4 font-[700] flex justify-center items-center'
        onClick={() => setIsSubmitting(true)}
        isLoading={isSubmitting}
      />
    </form>
  );
};

export default Form;
