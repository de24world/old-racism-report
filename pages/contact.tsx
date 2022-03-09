import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import { Typography } from '@material-ui/core/';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import Form from '../src/components/Contact/Form';
import FormExample from '../src/components/Contact/FormExample';
import Process from '../src/components/Contact/Process';
import ReportWay from '../src/components/Contact/ReportWay';
import Layout from '../src/components/Layout';

const ContactPage = function (): JSX.Element {
  const { t } = useTranslation('common');

  return (
    <div className="contact page">
      <Head>
        <title>
          {t('Racism Report App')} | {t('Report')}
        </title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Layout>
        <Typography variant="h4" color="primary" paragraph gutterBottom>
          <ContactMailIcon />
          &nbsp; Report & Contact Page
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          This Page is Report & Contact Page. We need your report. You can
          <strong> report Racism </strong>. Please send us Racism.
        </Typography>

        <Process />
        <ReportWay />
        <Form />
        <FormExample />
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ContactPage;
