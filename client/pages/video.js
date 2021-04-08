import { useState, useEffect } from "react";
import Axios from "axios";

import Layout from "../src/components/common/Layout";
import VideoList from "../src/components/Video/VideoList";
import VideoFilter from "../src/components/Video/VideoFilter";

const VideoPage = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
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
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);
  console.log(columns);

  return (
    <div>
      <Layout>
        <p>This is video.js Page</p>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
        {columns &&
          columns.map((column) => (
            <label>
              <input
                type="checkbox"
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  );
                }}
              />
              {column}
            </label>
          ))}
        <VideoFilter data={data} />
        <VideoList data={search(data)} />
      </Layout>
    </div>
  );
};

export default VideoPage;
