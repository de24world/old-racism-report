import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  Box,
  Container,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "../src/components/Layout";
import VideoList from "../src/components/Video/VideoList";
import useFetch from "../src/hooks/useFetch";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const VideoPage = () => {
  const classes = useStyles();

  const [data, isLoading] = useFetch("http://localhost:3006/api");
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
    <div>
      <Layout>
        <p>This is video.js Page</p>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <TextField
              id="outlined-secondary"
              type="text"
              label="Outlined secondary"
              variant="outlined"
              color="secondary"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Grid>

          <Grid item lg={9}>
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
            {isLoading ? (
              <CircularProgress className="progressbar" />
            ) : (
              <VideoList data={search(data)} />
            )}
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default VideoPage;
