import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="icon" href="/yellow.png" />
        <title>Ticket</title>
        <meta name="description" content="チケット販売システム" />
        <meta property="og:url" content="https://ticket-picra.jp/" />
        <meta property="og:title" content="Ticket" />
        <meta property="og:site_name" content="Ticket" />
        <meta property="og:description" content="チケット販売システム" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ticket-picra.jp/ogp.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
