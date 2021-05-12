import React, { useState, useEffect, useRef } from "react";

// Libarary
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as d3 from "d3";
import Axios from "axios";

// source
import Layout from "../src/components/Layout";
import LineChart from "../src/components/Chart/LineChart";
import BarChart from "../src/components/Chart/BarChart";
import HorizontalBarChart from "../src/components/Chart/HorizontalBarChart";

const StatisticsPage = () => {
  const API_URL = "http://localhost:3006/api";
  const [data, setData] = useState([]);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   d3.json("http://localhost:3001/api").then((data) => {
  //     setData(data);
  //     // console.log(data, "this is data in statics");
  //     // setLoading(false);
  //   });
  //   return () => undefined;
  // }, []);

  useEffect(() => {
    Axios.get(API_URL)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Layout>
        <p>This is statistics.js Page</p>
        {/* {loading && <div>loading</div>}
        {!loading &&  ... */}
        <LineChart />
        <BarChart data={data} />
        <HorizontalBarChart items={data} />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default StatisticsPage;
