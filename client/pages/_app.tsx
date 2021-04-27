import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import theme from "../src/utils/theme";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer";
import Layout from "../src/components/Layout";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Racism Report App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default appWithTranslation(MyApp);
