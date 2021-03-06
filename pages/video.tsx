import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { makeStyles, Grid, TextField, FormControlLabel, Checkbox, CircularProgress, Typography } from '@material-ui/core/';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import Layout from '../src/components/Layout';
import VideoList from '../src/components/Video/VideoList';

const useStyles = makeStyles((theme) => ({
  root: {},
  searchBar: { width: '100%' },
  filterCategory: { lineHeight: '3rem' },
}));

const VideoPage = function ({ data }): JSX.Element {
  const classes = useStyles();
  const router = useRouter();
  const reportData = data;
  const { t } = useTranslation('common');

  // serach & filter
  const [query, setQuery] = useState('');
  const [searchDataKeys, setSearchDataKeys] = useState(['country', 'city']);
  const dataKeys = reportData[0] && Object.keys(reportData[0]);

  function search(dataValues) {
    return dataValues.filter((dataValue) => searchDataKeys.some((dataKey) => dataValue[dataKey].toString().toLowerCase().indexOf(query.toLowerCase()) > -1));
  }

  return (
    <div className="video page">
      <Head>
        <title>
          {t('Racism Report App')} | {t('Video')}
        </title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Layout>
        <Typography variant="h4" color="primary" paragraph gutterBottom>
          <VideoLibraryIcon />
          &nbsp;
          {t('Video')} {t('Page')}
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          {t('videoPage.description')}
        </Typography>

        <Grid container spacing={2}>
          <Grid item lg={3} xs={12}>
            <TextField
              className={classes.searchBar}
              id="outlined-secondary"
              type="text"
              label={t('Search with value')}
              variant="outlined"
              color="secondary"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Grid>

          <Grid item lg={9} className={classes.filterCategory}>
            {dataKeys &&
              dataKeys.map((dataKey, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={searchDataKeys.includes(dataKey)}
                      onChange={(e) => {
                        const checked = searchDataKeys.includes(dataKey);
                        setSearchDataKeys((prev) => (checked ? prev.filter((sc) => sc !== dataKey) : [...prev, dataKey]));
                      }}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label={t(dataKey)}
                />
              ))}
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item>{router.isFallback ? <CircularProgress /> : <VideoList data={search(reportData)} />}</Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/reportDB.json`);
  const data = await res.json();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default VideoPage;
