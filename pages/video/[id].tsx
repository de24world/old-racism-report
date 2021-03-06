// Next.js
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';

// Material UI
import { makeStyles, CircularProgress } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';

import data from '../../db.json';

// Source
import VideoDetail from '../../src/components/Video/VideoDetail';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const VideoID = function (): JSX.Element {
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

  return (
    <div className="video [id] page">
      <VideoDetail data={datas} />
    </div>
  );
};

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
  const { id } = context.params;
  const { locale } = context;
  const res = await fetch(`http://localhost:3006/api/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default VideoID;
