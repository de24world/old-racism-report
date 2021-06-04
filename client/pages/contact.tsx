import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Layout";
import Form from "../src/components/Contact/Form";
import Process from "../src/components/Contact/Process";
import FormExample from "../src/components/Contact/FormExample";

const ContactPage = () => {
  return (
    <div className="contact page">
      <Layout>
        <Process />
        <Form />
        <FormExample />
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
