import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import type { AppProps } from "next/app";
import { useState } from "react";

import { ThemeProvider, useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

import { AuthProvider, ProtectedRoute } from "context/AuthProvider";

import { SWRConfig } from "swr";
const SWRCustomGlobalConfig = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
  loadingTimeout: 3000,
  fetcher: (resource: RequestInfo | URL, init: RequestInit | undefined) =>
    fetch(resource, init)
      .then((res) => res.json())
      .catch((err) => console.log(err)),
};

export default function App({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const { theme } = useTheme();
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <SWRConfig value={SWRCustomGlobalConfig}>
        <ThemeProvider attribute='class'>
          <ToastContainer limit={3} theme={theme === "light" ? "dark" : "light"} />
          <AuthProvider>
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          </AuthProvider>
        </ThemeProvider>
      </SWRConfig>
    </SessionContextProvider>
  );
}
