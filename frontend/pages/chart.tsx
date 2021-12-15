import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

// next

// Material UI
import { Typography, makeStyles } from "@material-ui/core";
import EqualizerIcon from "@material-ui/icons/Equalizer";

// source
import Charts from "../src/components/Chart/Charts";
import Layout from "../src/components/Layout";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const ChartPage = function({ data }): JSX.Element {
  const classes = useStyles();
  const reportData = data.report;
  const { t } = useTranslation("common");

  return (
    <div className="chart page">
      <Head>
        <title>
          {t("Racism Report App")} | {t("Chart")}
        </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Layout>
        <Typography variant="h4" color="primary" paragraph gutterBottom>
          <EqualizerIcon />
          &nbsp; {t("Chart")} {t("Page")}
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          {t("chartPage.description")}
        </Typography>

        {/* {loading && <div>loading</div>}
        {!loading &&  ... */}
        {/* <BarChart data={data} /> */}
        <Charts items={reportData} />
      </Layout>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const res = await fetch(process.env.OLD_API_URL);
  const data = await res.json();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}

export default ChartPage;
