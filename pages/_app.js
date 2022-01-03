import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/work-sans/100.css';
import '@fontsource/work-sans/200.css';
import '@fontsource/work-sans/300.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/600.css';
import '@fontsource/work-sans/700.css';
import '@fontsource/work-sans/800.css';
import '@fontsource/work-sans/900.css';
import theme from '../lib/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
