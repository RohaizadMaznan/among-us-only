import * as React from 'react';
import type { AppProps } from 'next/app'
import { PublicLayout, Blank } from "../components/Layout";
import { ToastProvider } from "react-toast-notifications";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const layouts = {
    PUBLIC: PublicLayout,
    BLANK: Blank,
  };

  const Layout = layouts[Component.layout] || ((children: React.ReactNode) => <>{children}</>);

  return (
    <ThemeProvider attribute="class">
      <ToastProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </ThemeProvider>
  );
}
