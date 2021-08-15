import React, { useEffect } from "react";

// next
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";

// Libarary
import * as gtag from "../lib/gtag";
import CookieConsent from "react-cookie-consent";

// material UI
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// source
import theme from "../src/utils/theme";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer";
import Layout from "../src/components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // Google Analytics
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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

        <CookieConsent
          buttonText="Accept"
          onAccept={() => {
            alert("Accept Cookie");
          }}
          declineButtonText="Decline"
          enableDeclineButton
          onDecline={() => {
            alert("Decline Cookie!");
          }}
        >
          Please confirm, if you accepted our tracking cookies. You can also
          decline the tracking. So you can continue to visit our website without
          any data sent to third party services.
        </CookieConsent>

        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default appWithTranslation(MyApp);
