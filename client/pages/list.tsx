import { useState, useEffect } from "react";
import Axios from "axios";
import Layout from "../src/components/common/Layout";
import ItemList from "../src/components/ItemList";

const ListPage = () => {
  const [dataList, setDataList] = useState([]);
  const API_URL = "http://localhost:3001/api";

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
        <p>This is list.js Page</p>
        <ItemList dataList={dataList} />
      </Layout>
    </div>
  );
};

export default ListPage;
