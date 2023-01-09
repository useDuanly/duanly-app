import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="theme-color" content="#317EFB" />
          <link rel="author" type="text/plain" href="/humans.txt" />
          <meta name="title" content="Duanly portafolio" />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://duanly-porfolio.vercel.app"
          />
          <meta property="og:title" content="Duanly portafolio " />
          <meta
            property="og:description"
            content="Hola bienvenido a mi portafolio web ,me llamo duanly vega alderete..."
          />
          <meta
            property="og:image"
            content="https://duanly-porfolio.vercel.app/_next/image?url=%2Fduanly.jpg&w=640&q=75"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://duanly-porfolio.vercel.app"
          />
          <meta property="twitter:title" content="Duanly portafolio" />
          <meta
            property="twitter:description"
            content="Hola bienvenido a mi portafolio web ,me llamo duanly vega alderete..."
          />
          <meta
            property="twitter:image"
            content="https://duanly-porfolio.vercel.app/_next/image?url=%2Fduanly.jpg&w=640&q=75"
          />
          <link rel="manifest" href="manifest.json" />

          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
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
