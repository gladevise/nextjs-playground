import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        {/* settings for PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon_x48.png"
          rel="icon"
          type="image/png"
          sizes="48x48"
        />
        <link
          href="/icons/icon_x72.png"
          rel="icon"
          type="image/png"
          sizes="72x72"
        />
        <link
          href="/icons/icon_x96.png"
          rel="icon"
          type="image/png"
          sizes="96x96"
        />
        <link
          href="/icons/icon_x128.png"
          rel="icon"
          type="image/png"
          sizes="128x128"
        />
        <link
          href="/icons/icon_x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/icons/icon_x384.png"
          rel="icon"
          type="image/png"
          sizes="384x384"
        />
        <link
          href="/icons/icon_x512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <link
          href="/icons/icon_x930.png"
          rel="icon"
          type="image/png"
          sizes="930x930"
        />
        <meta name="theme-color" content="#7cc5fe" />

        {/* settings for apple */}
        <link
          rel="apple-touch-icon"
          href="/icons/icon_x384.png"
          sizes="384x384"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
