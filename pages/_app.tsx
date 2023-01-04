import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();
  return (
    <ThemeProvider attribute='class'>
      <ToastContainer limit={3} theme={theme === "light" ? "dark" : "light"} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
