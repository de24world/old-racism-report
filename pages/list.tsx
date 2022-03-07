import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import { Typography } from '@material-ui/core/';
import ListAltIcon from '@material-ui/icons/ListAlt';

import Layout from '../src/components/Layout';
import LevelStep from '../src/components/LevelStep';
import ItemList from '../src/components/List/ItemList';

const ListPage = function ({ data }): JSX.Element {
  const { t } = useTranslation('common');
  const reportData = data;

  // const [dataList, setDataList] = useState([]);
  // const API_URL = "http://localhost:3006/api";

  // const getData = () => {
  //   Axios.get(API_URL).then((res) => {
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
          {t('Racism Report App')} | {t('List')}
        </title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Layout>
        <Typography variant="h4" color="primary" paragraph gutterBottom>
          <ListAltIcon />
          &nbsp; List Page
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          This Page is List Table Page. We need your report. You can
          <strong> search, filter, sort </strong> the table. Please click the table title.
        </Typography>

        <ItemList data={reportData} />
        <LevelStep />
      </Layout>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/reportDB.json`);
  const data = await res.json();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default ListPage;
