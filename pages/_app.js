
import React from 'react';
import { IconContext } from 'react-icons';
import Layout from '/components/Layout';
import '/styles/globals.css';


function MyApp({ Component, pageProps }) {


  return (
    <IconContext.Provider value={{ color: "#b03a2e", className: "react-icons" }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IconContext.Provider>
  );
}

export default MyApp;
