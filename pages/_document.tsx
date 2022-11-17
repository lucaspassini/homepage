import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <meta
            name="description"
            content="I am a front-end developer and designer, crafting clean and functional solutions."
          />
          <meta
            name="theme-color"
            content="#F5F5F5"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#1C1C1C"
            media="(prefers-color-scheme: dark)"
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
