import React, { useState, useEffect } from "react";

import Axios from "axios";
import Layout from "../../src/components/Layout";
import VideoDetail from "../../src/components/Video/VideoDetail";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// import dataJson from "../../data/listdata.json";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Video = ({ item }) => {
  const classes = useStyles();

  return (
    <div className="video [id] page">
      <Layout>
        {item && <VideoDetail item={item} />}
        {/* {isLoading && <CircularProgress />} */}
      </Layout>
    </div>
  );
};

export default Video;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `https://de24world.github.io/racism_data.json/${id}`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
