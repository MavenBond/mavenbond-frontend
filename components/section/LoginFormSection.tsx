/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";
import { _executeSchema } from "pages/login";
import { LOGIN_FORM_MODEL, LOGIN_ZOD_MODEL, SIGNUP_ZOD_MODEL } from "projConstants";
import { useState } from "react";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import LoginStyles from "styles/Login.module.css";
import { signInEmailPwd, signInGoogle, signUpEmailPwd } from "supabase/supbaseClient";
import { angry, happy } from "utils/toaster";

const LoginInput = dynamic(() => import("components/bypage/LoginInput"));
const Button = dynamic(() => import("components/common/Button"));

const LoginFormSection = () => {
  const { register, handleSubmit, reset, resetField } = useForm(); // react-hook-form methods
  const [hasAccount, setHasAccount] = useState(true); // to check login or sign up
  const [isSubmitting, setIsSubmitting] = useState(false); // submit state

  // private methods to work with schemas
  const _loginWithSchema = async (executedSchema: any) => {
    const { email, password } = executedSchema.data;
    const { data: accountData, error } = await signInEmailPwd(email, password);

    if (error) {
      // if error, toast error
      angry(error?.message);

      // reset submitting state
      setIsSubmitting(false);
      return;
    }

    // if no error, toast msg
    const happyMsg = `Welcome, ${accountData?.user?.email?.split("@")[0].toUpperCase()}!`;
    happy(happyMsg);

    // reset form fields
    reset();

    // if logging in, jump to Home
    if (hasAccount)
      setTimeout(() => {
        window.location.pathname = "/dashboard";
      }, 1500);
  };
  const _signUpWithSchema = async (executedSchema: any) => {
    const { email, password, fullName } = executedSchema.data;
    const { error } = await signUpEmailPwd(email, password, {
      full_name: fullName,
      email,
    });

    if (error) {
      // if error, toast error
      angry(error?.message);

      // reset submitting state
      setIsSubmitting(false);

      // reset fields
      resetField("password");
      resetField("confirmPassword");
      return;
    }

    // if no error, toast msg
    const happyMsg = `Please login to continue`;
    happy(happyMsg);

    // reset form fields
    reset();

    // after sign up hit, navigate to login form
    setHasAccount(true);
  };

  // submit handler
  const handleSubmitData = async (data: FieldValues) => {
    setIsSubmitting(true);

    // LOGIN
    if (hasAccount) {
      const [isGood, executedSchema] = _executeSchema(LOGIN_ZOD_MODEL, data, () => {
        setIsSubmitting(false);
      });
      if (isGood) _loginWithSchema(executedSchema);
      return;
    }

    // SIGN UP
    const [isGood, executedSchema] = _executeSchema(SIGNUP_ZOD_MODEL, data, () => {
      setIsSubmitting(false);
    });
    if (isGood) _signUpWithSchema(executedSchema);

    // reset submitting state
    setIsSubmitting(false);
  };

  return (
    <div className='h-screen w-full flex items-center justify-center pt-10'>
      <div className='w-[37.5rem] p-10 scale-[0.85] lg:scale-[1]'>
        {/* Google provider button */}
        {hasAccount && (
          <>
            <Button
              onClick={async () => {
                const { error } = await signInGoogle();
                angry(error?.message as string);
              }}
              className={LoginStyles.googleAuthBtn}
            >
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
          {LOGIN_FORM_MODEL.filter((_, idx) =>
            hasAccount ? idx !== 0 && idx !== LOGIN_FORM_MODEL.length - 1 : idx !== -1
          ).map(({ id, label, type, placeholders, required }) => {
            const [primary, secondary] = placeholders;
            return (
              <LoginInput
                required={required}
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
