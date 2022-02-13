import { PublicLayout, Blank } from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const layouts = {
    PUBLIC: PublicLayout,
    BLANK: Blank,
  };

  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
