// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Source Components
import Layout from "../src/components/Layout";
import Weekly from "../src/components/Home/Weekly";
import Main from "../src/components/Home/Main";
import FaQ from "../src/components/Home/FaQ";
import Total from "../src/components/Home/Total";

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
        <Main />
        <Total />
        <Weekly />
        <FaQ />
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
