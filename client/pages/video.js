import { useState, useEffect } from "react";
import Axios from "axios";
import Layout from "../src/components/common/Layout";
import VideoList from "../src/components/Video/VideoList";
import VideoFilter from "../src/components/Video/VideoFilter";

const ListPage = () => {
  const [dataList, setDataList] = useState([]);
  const API_URL = "http://localhost:3001/lists";

  const getData = () => {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setDataList(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Layout>
        <p>This is video.js Page</p>
        <VideoFilter dataList={dataList} />
        <VideoList dataList={dataList} />
      </Layout>
    </div>
  );
};

export default ListPage;
