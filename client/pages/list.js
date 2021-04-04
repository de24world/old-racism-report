import { useState, useEffect } from "react";
import Axios from "axios";
import Layout from "../src/components/common/Layout";
import ListItem from "../src/components/ListItem";

const ListPage = () => {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Layout>
        <p>This is list.js Page</p>
        <ListItem list={list} />
      </Layout>
    </div>
  );
};

export default ListPage;
