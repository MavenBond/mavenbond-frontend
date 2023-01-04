import dynamic from "next/dynamic";

const Helmet = dynamic(() => import("components/common/Helmet"));
const LoginLogoSection = dynamic(() => import("components/section/LoginLogoSection"));
const LoginFormSection = dynamic(() => import("components/section/LoginFormSection"));

const Login = () => {
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
