import React from "react";

// Next.js
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Material UI
import { makeStyles, CircularProgress } from "@material-ui/core/";

// Source
import Layout from "../../src/components/Layout";
import VideoDetail from "../../src/components/Video/VideoDetail";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function VideoID({ data }): JSX.Element {
  const classes = useStyles();
  const router = useRouter();

  // console.log(data, "data in [id].tsx")
  // console.log(router, "router in [id].tsx");

  return (
    <div className="video [id] page">
      <VideoDetail data={data} />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ locale, params }) {
  const res = await fetch(`http://localhost:3006/api/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default VideoID;
