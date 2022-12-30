import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { ByPageComponents, VariantComponents } from "components";
import { LOGIN_FORM_MODEL } from "consts";
import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

const flagsZod = z.object({ hasAccount: z.boolean(), isSubmitting: z.boolean() });
type flagsType = z.infer<typeof flagsZod>;
type formMethodsType = {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  handleSubmitData: (data: FieldValues) => void;
  register: UseFormRegister<FieldValues>;
};
type FormProps = { flags: flagsType; formMethods: formMethodsType };

const Form = ({ flags, formMethods }: FormProps) => {
  const { LoginByPageComps } = ByPageComponents;
  const { SignInButton } = VariantComponents;
  const { handleSubmit, handleSubmitData, register } = formMethods;
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
          <LoginByPageComps.Input
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
      {isSubmitting ? (
        <Spin
          indicator={
            <LoadingOutlined
              style={{ fontSize: "2rem", color: "#fbbf24", margin: "2rem 0" }}
              spin
            />
          }
        />
      ) : (
        <SignInButton
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          text={hasAccount ? "LOGIN" : "SIGN UP"}
          className='my-4 font-[700]'
        />
      )}
    </form>
  );
};

export default Form;
