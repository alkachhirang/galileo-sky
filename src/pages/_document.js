import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>galileo-sky</title>
        <meta name="title" content="galileo-sky" />
        <meta name="description" content="BEYOND ENTERTAINMENT" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="galileo-sky" />
        <meta property="og:description" content="BEYOND ENTERTAINMENT" />
        <meta property="og:image" content="https://i.ibb.co/RjVcS0v/galileo-Sky.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="galileo-sky" />
        <meta property="twitter:description" content="BEYOND ENTERTAINMENT" />
        <meta property="twitter:image" content="https://i.ibb.co/RjVcS0v/galileo-Sky.png" />

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
