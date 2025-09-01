import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}

          {/* public assets begin */}
          <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
          <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
          {/* public assets end */}

          {/* Scripts that need to load before interactive - use regular script tags in Head */}
          <script src="/js/lang-config.js"></script>
          <script src="/js/translation.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Scripts that can load after interactive - use Next.js Script component */}
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
