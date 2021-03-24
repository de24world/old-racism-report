import Head from "next/head";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Racism Report App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Footer />
    </div>
  );
}
