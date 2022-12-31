// import { useRouter } from "next/router";
// import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import dynamic from "next/dynamic";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { FieldValues } from "react-hook-form";
import { Client } from "react-hydration-provider";
import { angry, happy } from "utils/toaster";

const Form = dynamic(() => import("components/bypage/login/Form"));
const Copyright = dynamic(() => import("components/bypage/login/Copyright"));
const Link = dynamic(() => import("next/link"));
const PageWrapper = dynamic(() => import("components/ui/PageWrapper"));
const ThemeToggler = dynamic(() => import("components/ui/ThemeToggler"));
const StyledWrapper = dynamic(() => import("styles/globals").then((rs) => rs.StyledWrapper));
const LoginWrapper = dynamic(() =>
  import("components/bypage/login/style").then((rs) => rs.LoginWrapper)
);

export default function Login() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [schema, setSchema] = useState<any>(null);

  // hooks
  // const router = useRouter();
  // const supabaseClient = useSupabaseClient();
  // const supabaseUser = useUser();

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
  const [hasAccount, setHasAccount] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();

  const handleSubmitData = (data: FieldValues) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _faker = (callback: any) =>
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
    <PageWrapper headTitle='Sign In' showNav={false}>
      <StyledWrapper>
        <LoginWrapper>
          <Client>
            <div
              className='container container-extra'
              data-theme={theme === "light" ? "lofi" : "halloween"}
            >
              {/* logo */}
              <div className='absolute top-[1rem] left-[2rem]'>
                <Link href='/'>
                  <h1
                    className="
                    text-[1.75rem] font-['Inter'] 
                    font-semibold text-amber-500 select-none
                  "
                  >
                    MAVENBOND
                  </h1>
                </Link>
              </div>

              {/* theme toggler */}
              <div className='absolute top-[1.25rem] right-[2rem]'>
                <ThemeToggler
                  extraSunClass='text-amber-500'
                  extraMoonClass='text-[rgba(124,58,237,1)]'
                />
              </div>

              {/* main form */}
              <div className='main-form'>
                <Form
                  flags={{ hasAccount, isSubmitting }}
                  formMethods={{ handleSubmitData, setIsSubmitting }}
                />

                <div className='divider text-[#0d1626] dark:text-white bg-opacity-0'>
                  <a
                    className='
                    text-[#0d1626] dark:text-white
                    cursor-pointer mx-auto 
                    xs:text-[0.9rem] sm:text-[0.9rem] text-[1rem]
                  '
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {hasAccount
                      ? "Don't have an account yet? Sign Up 🚀"
                      : "Already have an account? Login Now ✨"}
                  </a>
                </div>

                {/* copyright */}
                <Copyright />
              </div>
            </div>
          </Client>
        </LoginWrapper>
      </StyledWrapper>
    </PageWrapper>
  );
}
