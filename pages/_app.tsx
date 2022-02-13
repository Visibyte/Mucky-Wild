import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import defaultTheme from 'styles/Theme';
import Globals from 'styles/Global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <ThemeProvider theme={defaultTheme}>
        <Globals />
        <Component {...pageProps} />
      </ThemeProvider>
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
