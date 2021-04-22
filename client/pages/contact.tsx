import Layout from "../src/components/Common/Layout";
import Contact from "../src/components/Contact";
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

export default ContactPage;
