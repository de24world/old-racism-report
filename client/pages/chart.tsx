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
import LineChart from "../src/components/Chart/LineChart";
import BarChart from "../src/components/Chart/BarChart";
import HorizontalBarChart from "../src/components/Chart/HorizontalBarChart";
import LevelStep from "../src/components/LevelStep";

const useStyles = makeStyles((theme) => ({
  root: { margin: theme.spacing(2) },
}));

const ChartPage = () => {
  const classes = useStyles();
  const [data, isLoading] = useFetch("http://localhost:3006/api");

  return (
    <div className={classes.root}>
      <Layout>
        <Typography variant="h5" align="center" paragraph>
          CHART PAGE
        </Typography>
        {/* {loading && <div>loading</div>}
        {!loading &&  ... */}
        <LineChart />
        {/* <BarChart data={data} /> */}
        <HorizontalBarChart items={data} />

        <LevelStep />
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
