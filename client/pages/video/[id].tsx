import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Axios from "axios";
import Layout from "../../src/components/Common/Layout";
import VideoDetail from "../../src/components/Video/VideoDetail";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// import dataJson from "../../data/listdata.json";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Post = () => {
  const classes = useStyles();

  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `http://localhost:3001/api/${id}`;

  const getData = () => {
    Axios.get(API_URL).then((res) => {
      // console.log(res.data);
      setItem(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return (
    <>
      <Layout>
        <p>Post : {id} </p>
        {!isLoading && <VideoDetail item={item} />}
        {isLoading && <CircularProgress />}
      </Layout>
    </>
  );
};

Post.propTypes = {};

export default Post;
