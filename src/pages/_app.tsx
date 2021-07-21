import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import smoothScroll from 'smoothscroll-polyfill';

import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    smoothScroll.polyfill();
  }

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
