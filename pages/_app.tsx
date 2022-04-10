import { Menu } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
