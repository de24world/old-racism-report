import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Layout from "../../src/components/common/Layout";

// import dataJson from "../../data/listdata.json";

const Post = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Layout>
        <p>Post : {id} </p>
      </Layout>
    </>
  );
};

Post.propTypes = {};

export default Post;
