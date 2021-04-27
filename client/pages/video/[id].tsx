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

const Post = ({ item }) => {
  const classes = useStyles();

  return (
    <>
      <Layout>
        {item && <VideoDetail item={item} />}
        {/* {isLoading && <CircularProgress />} */}
      </Layout>
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://localhost:3001/api/${id}`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
