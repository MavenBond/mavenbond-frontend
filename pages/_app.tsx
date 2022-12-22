import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HydrationProvider } from "react-hydration-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HydrationProvider>
      <Component {...pageProps} />
    </HydrationProvider>
  );
}
