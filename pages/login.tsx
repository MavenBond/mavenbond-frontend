// import { useRouter } from "next/router";
// import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { message } from "antd";
import { ByPageComponents, UIComponents } from "components";
import { LoginWrapper } from "components/bypage/login/style";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Client } from "react-hydration-provider";
import { StyledWrapper } from "styles/globals";
import { z } from "zod";

export default function Login() {
  // comp destruct
  const { PageWrapper, ThemeToggler } = UIComponents;
  const { LoginByPageComps } = ByPageComponents;
  const { register, handleSubmit, reset } = useForm();

  // hooks
  // const router = useRouter();
  // const supabaseClient = useSupabaseClient();
  // const supabaseUser = useUser();

  // states
  const [hasAccount, setHasAccount] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();

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

  const handleSubmitData = (data: FieldValues) => {
    setIsSubmitting(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _faker = (callback: any) =>
      setTimeout(() => {
        setIsSubmitting(false);
        callback();
      }, 1000);

    const executedSchema = fieldValuesSchema.safeParse(data);
    if (!executedSchema.success) {
      _faker(() => {
        message.error(executedSchema.error.issues[0].message);
      });
    } else {
      // TODO: handle valid form data here
      console.log(executedSchema.data);
      reset();
      _faker(() => {
        console.log(executedSchema.data);
        message.success("Welcome back!");
        reset();
      });
    }
  };

  return (
    <PageWrapper headTitle="Sign In" showNav={false}>
      <StyledWrapper>
        <LoginWrapper>
          <Client>
            <div
              className="container container-extra"
              data-theme={theme === "light" ? "lofi" : "halloween"}
            >
              {/* logo */}
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-[1rem] left-[2rem]"
              >
                <Link href="/">
                  <h1
                    className="
                    text-[1.75rem] font-['Inter'] 
                    font-semibold text-amber-500 select-none
                  "
                  >
                    MAVENBOND
                  </h1>
                </Link>
              </motion.div>

              {/* theme toggler */}
              <div className="absolute top-[1.25rem] right-[2rem]">
                <ThemeToggler
                  extraSunClass="text-amber-500"
                  extraMoonClass="text-[rgba(124,58,237,1)]"
                />
              </div>

              {/* main form */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="main-form"
              >
                <LoginByPageComps.Form
                  flags={{ hasAccount, isSubmitting }}
                  formMethods={{ handleSubmit, handleSubmitData, register }}
                />

                <div className="divider text-[#0d1626] dark:text-white bg-opacity-0">
                  <a
                    className="
                    text-[#0d1626] dark:text-white
                    cursor-pointer mx-auto 
                    xs:text-[0.9rem] sm:text-[0.9rem] text-[1rem]
                  "
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {hasAccount
                      ? "Don't have an account yet? Sign Up 🚀"
                      : "Already have an account? Login Now ✨"}
                  </a>
                </div>

                {/* copyright */}
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="copyright"
                >
                  <Link href="/">
                    <strong>Home </strong>
                  </Link>
                  <Link href="/#about-us">
                    |<strong> About Us </strong>
                  </Link>
                  | © 2022 <strong>MavenBond</strong>
                  <span className="xs:hidden sm:hidden">. All Rights Reserved</span>
                </motion.p>
              </motion.div>
            </div>
          </Client>
        </LoginWrapper>
      </StyledWrapper>
    </PageWrapper>
  );
}
