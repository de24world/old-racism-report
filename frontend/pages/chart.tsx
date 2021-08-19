import React from "react";

// next
import Head from "next/head";

// Libarary
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Material UI
import { Typography, makeStyles } from "@material-ui/core";
import EqualizerIcon from "@material-ui/icons/Equalizer";

// source
import Layout from "../src/components/Layout";
import Charts from "../src/components/Chart/Charts";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ChartPage({ data }): JSX.Element {
  const classes = useStyles();
  const reportData = data.report;

  return (
    <div className="chart page">
      <Head>
        <title>Racism Report App | chart</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Layout>
        <Typography variant="h4" color="primary" paragraph gutterBottom>
          <EqualizerIcon />
          &nbsp; Chart Page
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          This Page is Chart Page. You can see a lot of Charts about Racism. You
          can see <strong>6 Charts </strong>
        </Typography>

        {/* {loading && <div>loading</div>}
        {!loading &&  ... */}
        {/* <BarChart data={data} /> */}
        <Charts items={reportData} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  const res = await fetch(`https://racism-report-strapi.herokuapp.com/reports`);
  const data = await res.json();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default ChartPage;
