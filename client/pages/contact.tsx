import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Layout";
import Form from "../src/components/Contact/Form";
import Process from "../src/components/Contact/Process";

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <p>This is report.js Page</p>
        <Process />
        <Form />
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ContactPage;
