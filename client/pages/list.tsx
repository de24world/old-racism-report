import { useState, useEffect } from "react";

// Libarary
import Axios from "axios";

// Next
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Source Components
import Layout from "../src/components/Layout";
import ItemList from "../src/components/List/ItemList";
import LevelStep from "../src/components/LevelStep";

const ListPage = () => {
  const [dataList, setDataList] = useState([]);
  const API_URL = "http://localhost:3006/api";

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
        <LevelStep />
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
