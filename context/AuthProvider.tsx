import type { User } from "@supabase/gotrue-js";
import Router from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { getSessionData } from "supabase/supbaseClient";
import { useAuth } from "./useAuth";

type AuthContextType = {
  isAuthenticated?: boolean;
  isLoading?: boolean;
  user?: User;
};
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
});
export const AuthProvider = ({ children }: { children: React.ReactElement }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // check for active session
        const { data } = await getSessionData();
        setUser(data?.session?.user);
        setLoading(false);

        // DEV
        console.log(data?.session);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, isLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { isAuthenticated }: { isAuthenticated?: boolean; user?: User } = useAuth();
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
    Router.push("/dashboard");
    return null;
  }
  return children;
};
