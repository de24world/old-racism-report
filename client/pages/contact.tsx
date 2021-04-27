import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Layout";
import Contact from "../src/components/Contact/Contact";
import Process from "../src/components/Contact/Process";

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <p>This is report.js Page</p>
        <Process />
        <Contact />
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
