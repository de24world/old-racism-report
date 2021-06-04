import { useState, useEffect } from "react";

// Libarary
import Axios from "axios";

// Next
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Materail UI
import { Typography } from "@material-ui/core/";
import ListAltIcon from "@material-ui/icons/ListAlt";

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
    <div className="list page">
      <Layout>
        <Typography variant="h4" color="primary" paragraph gutterBottom>
          <ListAltIcon />
          &nbsp; List Page
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          This Page is List Table Page. We need your report. You can
          <strong> search, filter, sort </strong> the table. Please click the
          table title.
        </Typography>

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
