import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

import { FC } from "react";
import { AppProps } from "next/app";

import Head from "next/head";

import { Layout } from "../utils/layout";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: any;
  };
};

const MyApp: FC<AppProps> = ({
  Component,
  pageProps,
}: ComponentWithPageLayout) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=deviceWidth, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta charSet="utf-8" />
        <title>游学</title>
        <meta name="description" content={"摄影"} />
        <meta name="author" content="Alex" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://simpl3r.com" /> */}
        <meta name="twitter:description" content="游学" />
        <meta name="twitter:title" content="游学" />
        <meta name="og:description" content="游学" />
        {/* <meta
          name="og:image"
          content="https://storage.googleapis.com/simpl3r-public/images/simpler-logo.png"
        />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="627" /> */}
        {/* <meta
          name="twitter:image"
          content="https://storage.googleapis.com/simpl3r-public/images/simpler-logo.png"
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/simpl3r-public/images/simpler-logo.png"
        /> */}
        <meta property="og:description" content="Oshun" />
      </Head>

      <ChakraProvider theme={theme}>
        <CSSReset />
        {Component.PageLayout ? (
          //  Sidebar?: ComponentType<{}>
          <>
            <Component.PageLayout>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Component.PageLayout>
          </>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ChakraProvider>
    </>
  );
};

export default MyApp;
