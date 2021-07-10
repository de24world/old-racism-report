// import Head from "next/head";
// import styles from "../styles/Home.module.css";

// Next Libarary
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

// Material UI
import { CircularProgress } from "@material-ui/core/";

// Custom Hooks
import useFetch from "../src/hooks/useFetch";

// Source Components
import Layout from "../src/components/Layout";
import Recently from "../src/components/Home/Recently";
import Main from "../src/components/Home/Main";
import FaQ from "../src/components/Home/FaQ";
import Total from "../src/components/Home/Total";

function Home(): JSX.Element {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const [data, isLoading] = useFetch("http://localhost:3006/api");
  // console.log(
  //   data,
  //   isLoading,
  //   "this is data, isLoading(original:true must be false) in index.tsx"
  // );

  return (
    <div className="index page">
      <Head>
        <title>Racism Report App | index</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Layout>
        <h1>Index page</h1>
        <p>Current locale: {locale}</p>
        <p>Default locale: {defaultLocale}</p>
        <p>Configured locales: {JSON.stringify(locales)}</p>
        <Main />
        <Total data={data} isLoading={isLoading} />
        <Recently data={data} isLoading={isLoading} />
        <FaQ />
      </Layout>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
