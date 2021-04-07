import { useState, useEffect } from "react";
import Axios from "axios";

import Layout from "../src/components/common/Layout";
import VideoList from "../src/components/Video/VideoList";
import VideoFilter from "../src/components/Video/VideoFilter";

const VideoPage = () => {
  const [dataList, setDataList] = useState([]);
  const [q, setQ] = useState("");
  const API_URL = "http://localhost:3001/lists";

  useEffect(() => {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setDataList(res.data);
    });
  }, []);

  function search(rows) {
    return rows.filter((row) => row.country.toLowerCase().indexOf(q) > -1);
  }

  return (
    <div>
      <Layout>
        <p>This is video.js Page</p>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
        {/* https://youtu.be/d1r0aK5awWk */}
        <VideoFilter dataList={dataList} />
        <VideoList dataList={search(dataList)} />
      </Layout>
    </div>
  );
};

export default VideoPage;
