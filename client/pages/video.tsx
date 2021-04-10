import { useState, useEffect } from "react";
import Axios from "axios";

import Layout from "../src/components/common/Layout";
import VideoList from "../src/components/Video/VideoList";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";

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
        <TextField
          id="outlined-secondary"
          type="text"
          label="Outlined secondary"
          variant="outlined"
          color="secondary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {dataKeys &&
          dataKeys.map((dataKey) => (
            <FormControlLabel
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

        {!isLoading && <VideoList data={search(data)} />}
        {isLoading && <CircularProgress />}
      </Layout>
    </div>
  );
};

export default VideoPage;
