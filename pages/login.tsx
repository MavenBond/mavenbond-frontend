import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { FieldValues } from "react-hook-form";
import type { Schema } from "zod";
import { angry } from "utils/toaster";

const Helmet = dynamic(() => import("components/common/Helmet"));
const LoginLogoSection = dynamic(() => import("components/section/LoginLogoSection"));
const LoginFormSection = dynamic(() => import("components/section/LoginFormSection"));

// private method to work with schemas
export const _executeSchema = (schema: Schema, data: FieldValues, callback: () => void) => {
  // used schema to validate
  const executedSchema = schema.safeParse(data);

  // DEV
  // console.log(executedSchema);

  // FORM DATA IS INVALID
  if (!executedSchema.success) {
    // if error, toast error (form validation)
    console.log(executedSchema.error.issues);
    angry(executedSchema.error.issues[0].message);

    // reset submitting state
    callback();
    return [false, {}];
  }

  return [true, executedSchema];
};

const Login = () => {
  const { isLoading } = useAuth();
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!isLoading) setDone(true);
  }, [isLoading]);

  if (!done) return null;
  return (
    <>
      <Helmet title='Login - MavenBond' description='Login - MavenBond' />
      <main>
        <LoginLogoSection />
        <LoginFormSection />
      </main>
    </>
  );
};

export default Login;
