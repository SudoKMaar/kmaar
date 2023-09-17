import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#7000FF" />
          <link rel="icon" href="/favicons/favicon.ico" />
          <meta
            name="google-site-verification"
            content="w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
