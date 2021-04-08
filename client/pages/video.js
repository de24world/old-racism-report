import { useState, useEffect } from "react";
import Axios from "axios";

import Layout from "../src/components/common/Layout";
import VideoList from "../src/components/Video/VideoList";
import VideoFilter from "../src/components/Video/VideoFilter";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const VideoPage = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [searchColumns, setSearchColumns] = useState(["country", "city"]);
  const API_URL = "http://localhost:3001/lists";

  useEffect(() => {
    Axios.get(API_URL).then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);

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
        {columns &&
          columns.map((column) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={searchColumns.includes(column)}
                  onChange={(e) => {
                    const checked = searchColumns.includes(column);
                    setSearchColumns((prev) =>
                      checked
                        ? prev.filter((sc) => sc !== column)
                        : [...prev, column]
                    );
                  }}
                  name="checkedB"
                  color="primary"
                />
              }
              label={column}
            />
          ))}
        <VideoFilter data={data} />
        <VideoList data={search(data)} />
      </Layout>
    </div>
  );
};

export default VideoPage;
