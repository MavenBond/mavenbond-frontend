import dynamic from "next/dynamic";
import Head from "next/head";

const LoginLogoSection = dynamic(() => import("components/section/LoginLogoSection"));
const LoginFormSection = dynamic(() => import("components/section/LoginFormSection"));

const Login = () => {
  return (
    <>
      <Head>
        <title>Login - MavenBond</title>
        <meta name='description' content='Login - MavenBond' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LoginLogoSection />
      <LoginFormSection />
    </>
  );
};

export default Login;
