import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Helmet = dynamic(() => import("components/common/Helmet"));
const LoginLogoSection = dynamic(() => import("components/section/LoginLogoSection"));
const LoginFormSection = dynamic(() => import("components/section/LoginFormSection"));

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
