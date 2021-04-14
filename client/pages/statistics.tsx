import React, { useState, useEffect, useRef } from "react";

import Layout from "../src/components/common/Layout";
// import Chart from "../src/components/Chart";

const StatisticsPage = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   d3.json("http://localhost:3001/api").then((data) => {
  //     setData(data);
  //     console.log(data);
  //     setLoading(false);
  //   });
  //   return () => undefined;
  // }, []);

  return (
    <div>
      <Layout>
        <p>This is statistics.js Page</p>
        {/* {loading && <div>loading</div>}
        {!loading &&  ... */}
        {/* <Chart data={data} /> */}
      </Layout>
    </div>
  );
};

export default StatisticsPage;
