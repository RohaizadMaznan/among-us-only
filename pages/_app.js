import { PublicLayout, Blank } from "../components/Layout";
import { ToastProvider } from "react-toast-notifications";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const layouts = {
    PUBLIC: PublicLayout,
    BLANK: Blank,
  };

  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

  return (
    <ToastProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  );
}

export default MyApp;
