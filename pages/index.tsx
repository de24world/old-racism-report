// import { getDatabase, ref, onValue, child, get } from 'firebase/database';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';

import FaQ from '../src/components/Home/FaQ';
import Main from '../src/components/Home/Main';
import Recently from '../src/components/Home/Recently';
import Total from '../src/components/Home/Total';
import Layout from '../src/components/Layout';
// import { firebaseApp } from '../utils/firebase';

const Home = function ({ data }): JSX.Element {
  // // firebase 1
  // const db = getDatabase(firebaseApp);
  // const firebasetRef = ref(db, 'reportDB');
  // console.log(firebasetRef, 'firebasetRef????');

  // onValue(firebasetRef, (snapshot) => {
  //   const data = snapshot.val();
  //   console.log(data, 'data in OnValue');
  //   // updateStarCount(postElement, data);
  // });

  // firebase 2
  // const dbRef = ref(getDatabase(firebaseApp));
  // get(child(dbRef, 'reportDB'))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val(), 'reportDB as dbRef');
  //     } else {
  //       console.log('No data available');
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const reportData = data;
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/reportDB.json`);
  const data = await res.json();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
