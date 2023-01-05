import dynamic from "next/dynamic";
import { LOGIN_FORM_MODEL } from "projConstants";
import { useEffect, useState } from "react";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import LoginStyles from "styles/Login.module.css";
import { signInEmailPwd, signInGoogle, signUpEmailPwd } from "supabase/supbaseClient";
import { angry, happy } from "utils/toaster";

const LoginInput = dynamic(() => import("components/bypage/LoginInput"));
const Button = dynamic(() => import("components/common/Button"));

const LoginFormSection = () => {
  // create zod schema for login/sign up form dynamically
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [schema, setSchema] = useState<any>(null); // zod schema to validate form
  useEffect(() => {
    (async () => {
      const { z } = await import("zod");
      // custom fx
      const fieldValuesSchema = z
        .object({
          email: z.string().email(),
          password: z.string().min(8, { message: "Password: at least 8 characters" }),
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

  const { register, handleSubmit, reset } = useForm(); // react-hook-form methods
  const [hasAccount, setHasAccount] = useState(true); // to check login or sign up
  const [isSubmitting, setIsSubmitting] = useState(false); // submit state

  // submit handler
  const handleSubmitData = async (data: FieldValues) => {
    setIsSubmitting(true);

    // used schema to validate
    const executedSchema = schema.safeParse(data);
    console.log(executedSchema);

    // IMPORTANT: DATA HANDLING
    if (!executedSchema.success) {
      // if error, toast error (form validation)
      angry(executedSchema.error.issues[0].message);

      // reset submitting state
      setIsSubmitting(false);
    } else {
      // get form data
      const { email, password } = executedSchema.data;

      // based on hasAccount -> login or sign up with Supabase
      const { data, error } = hasAccount
        ? await signInEmailPwd(email, password)
        : await signUpEmailPwd(email, password);

      if (error) {
        // if error, toast error
        angry(error?.message);
      } else {
        // if no error, toast msg based on hasAccount
        const happyMsg = hasAccount
          ? `Welcome back, ${data?.user?.email?.split("@")[0].toUpperCase()}!`
          : `Please login to begin`;
        happy(happyMsg);

        // rese4t form fields
        reset();

        setTimeout(() => {
          // if logging in, jump to Home
          if (hasAccount) window.location.pathname = "/";
        }, 1500);
      }

      // after sign up hit, navigate to login form
      !hasAccount && setHasAccount(true);

      // reset submitting state
      setIsSubmitting(false);
    }
  };

  return (
    <div className='h-screen w-full flex items-center justify-center pt-10'>
      <div className='w-[37.5rem] p-10 scale-[0.85] lg:scale-[1]'>
        {/* Google provider button */}
        {hasAccount && (
          <>
            <Button onClick={() => signInGoogle()} className={LoginStyles.googleAuthBtn}>
              <FcGoogle className='mr-2 text-[1.5rem]' />
              <span>LOGIN WITH GOOGLE</span>
            </Button>
            <div className='divider text-[#0d1626] dark:text-white bg-opacity-0 my-6'>OR</div>
          </>
        )}

        <form
          onSubmit={handleSubmit((data: FieldValues) => handleSubmitData(data))}
          className='flex flex-col gap-[1.2rem] items-center justify-center'
        >
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
          <Button className={LoginStyles.regularAuthBtn} isLoading={isSubmitting}>
            {hasAccount ? "LOGIN" : "SIGN UP"}
          </Button>
        </form>

        {/* toggle to sign up */}
        <div className='divider text-[#0d1626] dark:text-white bg-opacity-0'>
          <p className={LoginStyles.signUpToggle} onClick={() => setHasAccount(!hasAccount)}>
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
