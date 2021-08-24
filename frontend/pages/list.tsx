import { useState, useEffect } from "react";

// Libarary
import Axios from "axios";

// Next
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

// Materail UI
import { Typography } from "@material-ui/core/";
import ListAltIcon from "@material-ui/icons/ListAlt";

// Source Components
import Layout from "../src/components/Layout";
import ItemList from "../src/components/List/ItemList";
import LevelStep from "../src/components/LevelStep";

function ListPage({ data }): JSX.Element {
  const { t } = useTranslation("common");
  const reportData = data.report;

  // const [dataList, setDataList] = useState([]);
  // const API_URL = "http://localhost:3006/api";

  // const getData = () => {
  //   Axios.get(API_URL).then((res) => {
  //     // console.log(res.data);
  //     setDataList(res.data);
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="list page">
      <Head>
        <title>
          {t("Racism Report App")} | {t("List")}
        </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

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

        <ItemList data={reportData} />
        <LevelStep />
      </Layout>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const res = await fetch(`https://racism-report-strapi.herokuapp.com/reports`);
  const data = await res.json();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default ListPage;
