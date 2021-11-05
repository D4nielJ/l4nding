import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/Layout';

const Website = ({ Component, pageProps, router }) => (
  <ChakraProvider>
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  </ChakraProvider>
);

export default Website;
