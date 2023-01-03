import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { angry, happy } from "utils/toaster";

const LoginInput = dynamic(() => import("components/bypage/LoginInput"));
const Button = dynamic(() => import("components/common/Button"));

export const LOGIN_FORM_MODEL = [
  {
    id: "email",
    label: "Email",
    type: "text",
    placeholders: ["Your email", "Use a lovely email"],
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholders: ["Your password", "Use a strong password"],
  },
  {
    id: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholders: ["Confirm your password"],
  },
];

const LoginFormSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [schema, setSchema] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { z } = await import("zod");
      // custom fx
      const fieldValuesSchema = z
        .object({
          email: z.string().email(),
          password: z.string().min(8, { message: "At least 8 characters for password" }),
          confirmPassword: z.string(),
        })
        .required()
        .refine((data) => data.password === data.confirmPassword, {
          message: "Passwords don't match",
          path: ["matchingPasswords"], // path of error
        });
      setSchema(fieldValuesSchema);
    })();
  }, []);

  // states
  const { register, handleSubmit } = useForm();
  const [hasAccount, setHasAccount] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitData = (data: FieldValues) => {
    setIsSubmitting(true);
    const _faker = (callback: () => void) =>
      setTimeout(() => {
        setIsSubmitting(false);
        callback();
      }, 1000);

    const executedSchema = schema.safeParse(data);
    console.log(executedSchema);

    if (!executedSchema.success) {
      _faker(() => angry(executedSchema.error.issues[0].message));
    } else {
      // TODO: handle valid form data here
      _faker(() => {
        console.log(executedSchema.data);
        happy("Welcome back!");
      });
    }
  };

  return (
    <div className='h-screen w-full flex items-center justify-center pt-10'>
      <div className='w-[37.5rem] p-10 scale-[0.85] lg:scale-[1]'>
        <form
          onSubmit={handleSubmit((data: FieldValues) => handleSubmitData(data))}
          className='flex flex-col gap-[1.2rem] items-center justify-center'
        >
          {/* Google provider button */}
          <Button
            isLoading={isSubmitting}
            className='bg-purple-600 w-full text-white px-10 py-4 
            hover:shadow-xl hover:shadow-purple-500/40
            transition-shadow duration-300
            flex items-center justify-center mb-4 mt-2 rounded-[4rem]'
          >
            <FcGoogle className='mr-2 text-[1.5rem]' />
            <span>{hasAccount ? "LOGIN WITH GOOGLE" : "SIGN UP WITH GOOGLE"}</span>
          </Button>
          <div className='divider text-[#0d1626] dark:text-white bg-opacity-0 m-0'>OR</div>

          {/* form fields */}
          {LOGIN_FORM_MODEL.map(({ id, label, type, placeholders }) => {
            const [primary, secondary] = placeholders;
            return (
              <LoginInput
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

          {/* loading indicator & login Button */}
          <Button
            className='text-[#0d1626] w-full h-12 text-[1.2rem] bg-amber-500 rounded-[4rem]
          hover:shadow-xl hover:shadow-amber-500/40 my-10 font-bold
          transition-shadow duration-300 flex items-center justify-center'
            isLoading={isSubmitting}
          >
            {hasAccount ? "LOGIN" : "SIGN UP"}
          </Button>
        </form>

        {/* toggle to sign up */}
        <div className='divider text-[#0d1626] dark:text-white bg-opacity-0'>
          <p
            className='
              text-[#0d1626] dark:text-white
              cursor-pointer mx-auto 
              text-[0.9rem] md:text-[1rem]
            '
            onClick={() => setHasAccount(!hasAccount)}
          >
            {hasAccount
              ? "Don't have an account yet? Sign Up 🚀"
              : "Already have an account? Login Now ✨"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginFormSection;
