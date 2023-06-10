import Head from 'next/head';
import React from 'react';
import { IconContext } from 'react-icons';
import Layout from '/components/Layout';
import '/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" sizes="192x192" href="/icon.png"></link>
        <link
          rel="shortcut icon"
          href="/icon.png"
          type="image/png"
        ></link>
        <link
          rel="apple-touch-icon"
          href="/icon.png"
          type="image/png"
        ></link>
        <title>Pizzaria</title>
      </Head>
      <IconContext.Provider value={{ color: "#b03a2e", className: "react-icons" }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IconContext.Provider>
    </>

  );
}

export default MyApp;
