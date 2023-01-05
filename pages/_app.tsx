import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import type { AppProps } from "next/app";
import { useState } from "react";

import { ThemeProvider, useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

import { AuthProvider, ProtectedRoute } from "context/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const { theme } = useTheme();
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <ThemeProvider attribute='class'>
        <ToastContainer limit={3} theme={theme === "light" ? "dark" : "light"} />
        <AuthProvider>
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        </AuthProvider>
      </ThemeProvider>
    </SessionContextProvider>
  );
}
