import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { ThemeProvider, useTheme } from "next-themes";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useState } from "react";
import { HydrationProvider } from "react-hydration-provider";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

const ToastContainer = dynamic(() => import("react-toastify").then((rs) => rs.ToastContainer));

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const { theme } = useTheme();

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <HydrationProvider>
        <ThemeProvider attribute='class'>
          <ToastContainer limit={3} theme={theme === "light" ? "dark" : "light"} />
          <Component {...pageProps} />
        </ThemeProvider>
      </HydrationProvider>
    </SessionContextProvider>
  );
}
