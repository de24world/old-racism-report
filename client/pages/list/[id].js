import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Axios from "axios";
import Layout from "../../src/components/common/Layout";
import VideoDetail from "../../src/components/Video/VideoDetail";

// import dataJson from "../../data/listdata.json";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://localhost:3006/api/${id}`;

  const getData = () => {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setItem(res.data);
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
        <VideoDetail item={item} />
      </Layout>
    </>
  );
};

Post.propTypes = {};

export default Post;
