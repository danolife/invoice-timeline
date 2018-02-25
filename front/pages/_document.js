import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <script src="https://use.fontawesome.com/310ade6560.js" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,600"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <style>{`
          body {
            margin: 0;
            background-color: #f2f2f2;
            font-family: Roboto, sans-serif;
          }
        `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
