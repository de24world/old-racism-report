// import { collection, getDocs, getDatabase } from 'firebase/firestore';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';

import FaQ from '../src/components/Home/FaQ';
import Main from '../src/components/Home/Main';
import Recently from '../src/components/Home/Recently';
import Total from '../src/components/Home/Total';
import Layout from '../src/components/Layout';
import { firebaseApp } from '../utils/firebase';

const Home = function ({ data }): JSX.Element {
  // firebase
  const db = getDatabase(firebaseApp);
  const firebasetRef = ref(db, 'reportDB');
  console.log(firebasetRef, 'firebasetRef????');

  onValue(firebasetRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data, 'data in OnValue');
    // updateStarCount(postElement, data);
  });

  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const reportData = data.report;
  const { t } = useTranslation('common');

  return (
    <div className="index page">
      <Head>
        <title>
          {t('Racism Report App')} | {t('Home')}
        </title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Layout>
        <h1>Index page</h1>
        <p> locale: {locale}</p>
        <p>Default locale: {defaultLocale}</p>
        <p>Configured locales: {JSON.stringify(locales)}</p>
        <Main />
        <Total data={reportData} />
        {/* <Recently data={reportData} /> */}
        <FaQ />
      </Layout>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  // original
  const res = await fetch(process.env.OLD_API_URL);
  const data = await res.json();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
