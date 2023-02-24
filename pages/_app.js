import { Roboto } from "@next/font/google";
import Layout from "components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";

const roboto = Roboto({ weight: ["300", "900"], subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
