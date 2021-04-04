import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Axios from "axios";
import Layout from "../../src/components/common/Layout";
import Item from "../../src/components/Item";

// import dataJson from "../../data/listdata.json";

const Post = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://localhost:3001/lists/${id}`;

  const getData = () => {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
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
        <Item item={item} />
      </Layout>
    </>
  );
};

Post.propTypes = {};

export default Post;
