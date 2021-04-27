import { useState, useEffect } from "react";
import Axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Layout";
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ListPage;
