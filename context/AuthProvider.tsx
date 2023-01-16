import type { User } from "@supabase/gotrue-js";
import Router from "next/router";
import React, { createContext, useEffect, useState } from "react";
import type { ReactElement } from "react";
import { getSessionData, supabaseClient } from "supabase/supbaseClient";
import { useAuth } from "./useAuth";

type AuthContextType = {
  isAuthenticated?: boolean;
  isLoading?: boolean;
  isFirstTime: boolean;
  user?: User | undefined;
  provider?: string | undefined;
  profile?: Record<string, string> | undefined;
};
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: false,
  isFirstTime: true,
  provider: "",
  user: undefined,
  profile: undefined,
});

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profile, setProfile] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // check for active session
        const { data } = await getSessionData();

        // get session profile
        const { data: profileData } = await supabaseClient
          .from("profiles")
          .select()
          .eq("id", data?.session?.user?.id);

        setUser(data?.session?.user);
        setProfile(profileData ? profileData[0] : {});
        setLoading(false);

        // DEV
        // profileData && console.log(profileData[0]);
        // console.log(data?.session);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        isLoading,
        user,
        provider: user?.app_metadata?.provider,
        profile,
        isFirstTime: profile?.user_role === null || profile?.user_role === "",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const {
    isAuthenticated,
    isFirstTime,
  }: {
    isAuthenticated?: boolean;
    isFirstTime?: boolean;
    profile?: Record<string, string> | undefined;
  } = useAuth();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // if not authenticated and path is not Login or Home,
  // redirect to Login
  if (
    !isAuthenticated &&
    window.location.pathname !== "/login" &&
    window.location.pathname !== "/"
  ) {
    Router.push("/login");
    return null;
  }

  // if  authenticated and path is Login
  // redirect to Home
  if (
    isAuthenticated &&
    (window.location.pathname === "/login" || window.location.pathname === "/")
  ) {
    if (!isFirstTime) Router.push("/dashboard");
    else Router.push("/intro");
    return null;
  }

  return children;
};
