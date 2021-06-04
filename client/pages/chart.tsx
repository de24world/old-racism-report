import React, { useState, useEffect, useRef } from "react";

// Libarary
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as d3 from "d3";
import Axios from "axios";

// Hooks
import useFetch from "../src/hooks/useFetch";

// Material UI
import { Typography, makeStyles } from "@material-ui/core";

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
        <Typography variant="h5" align="center" paragraph>
          CHART PAGE
        </Typography>
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
