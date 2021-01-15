import React from "react";
import App from "next/app";

import {AnimatePresence} from "framer-motion"
import "../styles.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      // exitBeforeEneter is an attribute that allows us to finish one animation on a component before trasition into another
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />;
      </AnimatePresence>
    )
  }
}

export default MyApp;
