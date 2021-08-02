import React from "react";
import data from "../../../db/data.json";

// Next.js
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

// Material UI
import { makeStyles, CircularProgress } from "@material-ui/core/";
import Alert from "@material-ui/lab/Alert";

// Source
import VideoDetail from "../../src/components/Video/VideoDetail";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function VideoID(): JSX.Element {
  const classes = useStyles();
  const router = useRouter();
  const datas = data[+router.query.id - 1];
  if (!datas)
    return (
      <div className="page">
        <Alert severity="error">
          <h1>Do not exist Data ID! Please write correct ID</h1>
        </Alert>
      </div>
    );

  // console.log(datas, "datas in [id].tsx");
  // console.log(router.query.id, "router in [id].tsx");

  return (
    <div className="video [id] page">
      <VideoDetail data={datas} />
    </div>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: "1" } },
//       { params: { id: "2" } },
//       { params: { id: "3" } },
//     ],
//     fallback: true,
//   };
// }

export async function getServerSideProps(context) {
  // const { id } = context.params;
  const { locale } = context;
  // const res = await fetch(`http://localhost:3006/api/${id}`);
  // const data = await res.json();

  return {
    props: {
      // data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default VideoID;
