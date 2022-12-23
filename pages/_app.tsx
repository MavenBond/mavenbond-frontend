import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HydrationProvider } from "react-hydration-provider";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HydrationProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </HydrationProvider>
  );
}
