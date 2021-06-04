import { useState } from "react";

// Next i18n
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

// Hooks
import useFetch from "../src/hooks/useFetch";

// Source Component
import Layout from "../src/components/Layout";
import VideoList from "../src/components/Video/VideoList";

const useStyles = makeStyles((theme) => ({
  root: {},
  searchBar: { width: "100%" },
  filterCategory: { lineHeight: "3rem" },
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
    <div className="video page">
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
