import { useState, useEffect } from "react";
import Axios from "axios";

import Layout from "../src/components/Common/Layout";
import VideoList from "../src/components/Video/VideoList";

import {
  Box,
  Container,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from "@material-ui/core/";

const VideoPage = () => {
  const API_URL = "http://localhost:3001/api";
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [searchDataKeys, setSearchDataKeys] = useState(["country", "city"]);

  useEffect(() => {
    Axios.get(API_URL).then((res) => {
      // console.log(res.data);
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

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

  // console.log(dataKeys, "this is dataKeys");

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
            {!isLoading && <VideoList data={search(data)} />}
            {isLoading && <CircularProgress />}
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default VideoPage;
