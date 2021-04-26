// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Common/Layout";
import Weekly from "../src/components/Weekly";

const Home = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  return (
    <div>
      {/* 
      <Head>
        <title>Racism Report App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      */}
      <Layout>
        <h1>Index page</h1>
        <p>Current locale: {locale}</p>
        <p>Default locale: {defaultLocale}</p>
        <p>Configured locales: {JSON.stringify(locales)}</p>
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
