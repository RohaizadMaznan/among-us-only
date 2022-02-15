import { PublicLayout, Blank } from "../components/Layout";
import "../styles/globals.css";
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const layouts = {
    PUBLIC: PublicLayout,
    BLANK: Blank,
  };

  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

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

export default MyApp;
