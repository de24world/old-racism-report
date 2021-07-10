import React, { useState, useEffect } from "react";

// Libarary
import Axios from "axios";

// Next.js
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Material UI
import { makeStyles, CircularProgress } from "@material-ui/core/";

// Custom Hooks
import useFetch from "../../src/hooks/useFetch";

// Source
import Layout from "../../src/components/Layout";
import VideoDetail from "../../src/components/Video/VideoDetail";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function VideoID(): JSX.Element {
  const classes = useStyles();
  const router = useRouter();
  const { query } = router;
  const [data, isLoading] = useFetch("http://localhost:3006/api");

  console.log(data, "data in [id].tsx");
  console.log(router, "router in [id].tsx");

  return (
    <div className="video [id] page">
      <Layout>
        ID : {query.id}
        {isLoading ? <CircularProgress /> : <VideoDetail data={data} />}
      </Layout>
    </div>
  );
}

export default VideoID;

// export async function getServerSideProps(context) {
//   const id = context.params.id;
//   const apiUrl = `http://localhost:3006/api${id}`;
//   const res = await Axios.get(apiUrl);
//   const data = res.data;

//   return {
//     props: {
//       item: data,
//     },
//   };
// }
