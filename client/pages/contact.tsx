import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Layout";
import Form from "../src/components/Contact/Form";
import Process from "../src/components/Contact/Process";
import FormExample from "../src/components/Contact/FormExample";

const ContactPage = () => {
  return (
    <>
      <Layout>
        <p>This is contact.js Page</p>
        <Process />
        <Form />
        <FormExample />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ContactPage;
