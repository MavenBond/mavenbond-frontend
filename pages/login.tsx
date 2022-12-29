// import { useRouter } from "next/router";
// import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useTheme } from "next-themes";
import { UIComponents, VariantComponents, ByPageComponents } from "components";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Client } from "react-hydration-provider";
import { FcGoogle } from "react-icons/fc";
import { StyledWrapper } from "styles/globals";

export default function Login() {
  // comp destruct
  const { PageWrapper, ThemeToggler } = UIComponents;
  const { SignInButton } = VariantComponents;
  const { LoginByPageComps } = ByPageComponents;

  // hooks
  // const router = useRouter();
  // const supabaseClient = useSupabaseClient();
  // const supabaseUser = useUser();

  // states
  const [hasAccount, setHasAccount] = useState(true);
  const { theme } = useTheme();

  return (
    <PageWrapper headTitle="Sign In" showNav={false}>
      <StyledWrapper>
        <Client>
          <div
            className="
              container border-l-[10px]
              md:border-l-[20px] lg:border-l-[20px] xl:border-l-[20px]
              border-double border-amber-500
            "
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
                <h1 className="text-[2rem] font-['Inter'] font-semibold text-amber-500 select-none">
                  MAVENBOND
                </h1>
              </Link>
            </motion.div>

            {/* theme toggler */}
            <div className="absolute top-[1.5rem] right-[2rem]">
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
              className="
                xs:w-[350px] sm:w-[350px]
                md:w-[600px] lg:w-[600px] xl:w-[600px] 
                my-auto mx-auto pt-[2rem] px-4
                select-none flex flex-col
                xs:scale-[0.9] sm:scale-95
              "
            >
              <form className="flex flex-col gap-[1rem] items-center justify-center">
                <button className="btn btn-primary w-full mb-4 mt-2 rounded-[10rem]">
                  <FcGoogle className="mr-2 text-[1.5rem]" />
                  <span>{hasAccount ? "Sign In with Google" : "Sign Up with Google"}</span>
                </button>

                <div className="divider text-[#0d1626] dark:text-white bg-opacity-0 m-0">OR</div>
                <LoginByPageComps.Input
                  id="email"
                  htmlFor="email"
                  label="Email"
                  placeholder={hasAccount ? "Your email" : "Use a lovely email"}
                  type="text"
                />

                <LoginByPageComps.Input
                  id="password"
                  htmlFor="password"
                  label="Password"
                  placeholder={hasAccount ? "Your password" : "Use a strong password"}
                  type="password"
                />

                <SignInButton
                  text={hasAccount ? "LOGIN " : "SIGN UP"}
                  className="rounded-[3rem] my-4 font-[700] "
                />
              </form>

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
                className="
                  lg:absolute lg:bottom-[2rem] lg:right-[2rem]
                  xl:absolute xl:bottom-[2rem] xl:right-[2rem]
                  self-center mt-[2rem]
                  text-[1.15rem] text-[#0d1626] dark:text-white
                  xs:text-[0.8rem] sm:text-[0.8rem]
                "
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
      </StyledWrapper>
    </PageWrapper>
  );
}
