import React, { useState, useEffect, useRef } from "react";

// Libarary
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Hooks
import useFetch from "../src/hooks/useFetch";

// Material UI
import { Typography, makeStyles } from "@material-ui/core";
import EqualizerIcon from "@material-ui/icons/Equalizer";

// source
import Layout from "../src/components/Layout";
import Charts from "../src/components/Chart/Charts";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ChartPage = () => {
  const classes = useStyles();
  const [data, isLoading] = useFetch("http://localhost:3006/api");

  return (
    <div className="chart page">
      <Layout>
        <div className="__block">
          <Typography variant="h4" color="primary" paragraph gutterBottom>
            <EqualizerIcon />
            &nbsp; Chart Page
          </Typography>
          <Typography variant="body1" paragraph gutterBottom>
            This Page is Chart Page. You can see a lot of Charts about Racism.
            You can see <strong>6 Charts </strong>
          </Typography>
        </div>

        {/* {loading && <div>loading</div>}
        {!loading &&  ... */}
        {/* <BarChart data={data} /> */}
        <Charts items={data} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ChartPage;
