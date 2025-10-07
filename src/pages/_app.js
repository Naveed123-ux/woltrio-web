import React from "react";
import Head from "next/head";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* seo begin */}
        <title>Woltrio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/img/hero/favicon.png"
        />
        {/* seo end */}
      </Head>
      <div id="google_translate_element" className="bg-black"></div>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
