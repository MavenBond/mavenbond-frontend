import Router from "next/router";
import React, { createContext, useState, useEffect } from "react";
import { getSessionData } from "supabase/supbaseClient";
import { useAuth } from "./useAuth";
import { User } from "@supabase/gotrue-js";

export const AuthContext = createContext({});
export const AuthProvider = ({ children }: { children: React.ReactElement }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getSessionData();
        setUser(data?.session?.user);
        console.log(data?.session);
        setLoading(false);
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
  const { isAuthenticated }: { isAuthenticated?: boolean } = useAuth();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (
    !isAuthenticated &&
    window.location.pathname !== "/login" &&
    window.location.pathname !== "/"
  ) {
    Router.push("/login");
    return null;
  }
  if (isAuthenticated && window.location.pathname === "/login") {
    Router.push("/");
    return null;
  }
  return children;
};
