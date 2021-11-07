import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/work-sans'
import theme from '../lib/theme';
import Layout from '../components/layouts/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
