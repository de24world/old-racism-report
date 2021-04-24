// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Common/Layout";
import Weekly from "../src/components/Weekly";

const Home = () => {
  return (
    <div>
      {/* 
      <Head>
        <title>Racism Report App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      */}
      <Layout>
        <p>This is index.js Page</p>
        <h2>Weekly Reacism Video</h2>
        <Weekly />
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
