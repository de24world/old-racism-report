import React, { useState, useEffect, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import * as d3 from "d3";
import Layout from "../src/components/Common/Layout";
import LineChart from "../src/components/Chart/LineChart";
import BarChart from "../src/components/Chart/BarChart";

const StatisticsPage = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    d3.json("http://localhost:3001/api").then((data) => {
      setData(data);
      // console.log(data, "this is data in statics");
      // setLoading(false);
    });
    return () => undefined;
  }, []);

  return (
    <div>
      <Layout>
        <p>This is statistics.js Page</p>
        {/* {loading && <div>loading</div>}
        {!loading &&  ... */}
        <LineChart />
        <BarChart data={data} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default StatisticsPage;
