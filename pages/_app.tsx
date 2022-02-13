import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Component {...pageProps} />
    </>
  );
}

// seperate head tag for cleaner app
const AppHead = () => (
  <Head>
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Work+Sans:wght@200&display=swap"
        rel="stylesheet"
      />
    </>
  </Head>
);

export default MyApp;
