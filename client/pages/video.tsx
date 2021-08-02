import { useState } from "react";
import data from "../public/db/data.json";

// Next
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Material UI
import {
  makeStyles,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Typography,
} from "@material-ui/core/";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

// Source Component
import Layout from "../src/components/Layout";
import VideoList from "../src/components/Video/VideoList";

const useStyles = makeStyles((theme) => ({
  root: {},
  searchBar: { width: "100%" },
  filterCategory: { lineHeight: "3rem" },
}));

function VideoPage(): JSX.Element {
  const classes = useStyles();
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [searchDataKeys, setSearchDataKeys] = useState(["country", "city"]);

  function search(dataValues) {
    return dataValues.filter((dataValue) =>
      searchDataKeys.some(
        (dataKey) =>
          dataValue[dataKey]
            .toString()
            .toLowerCase()
            .indexOf(query.toLowerCase()) > -1
      )
    );
  }

  const dataKeys = data[0] && Object.keys(data[0]);

  return (
    <div className="video page">
      <Head>
        <title>Racism Report App | video</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Layout>
        <Typography variant="h4" color="primary" paragraph gutterBottom>
          <VideoLibraryIcon />
          &nbsp; Video Page
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          This Page is Video Page. You can watch a lot of Videos about Racism.
          You can do <strong> search & filter </strong> videos.
        </Typography>

        <Grid container spacing={2}>
          <Grid item lg={3} xs={12}>
            <TextField
              className={classes.searchBar}
              id="outlined-secondary"
              type="text"
              label="Search with value"
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
                        setSearchDataKeys((prev) =>
                          checked
                            ? prev.filter((sc) => sc !== dataKey)
                            : [...prev, dataKey]
                        );
                      }}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label={dataKey}
                />
              ))}
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item>
            {router.isFallback ? (
              <CircularProgress />
            ) : (
              <VideoList data={search(data)} />
            )}
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  // const res = await fetch(`http://localhost:3006/api`);
  // const data = await res.json();

  return {
    props: {
      // data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default VideoPage;
