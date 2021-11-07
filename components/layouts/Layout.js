import Head from 'next/head';
import { Box, Container } from '@chakra-ui/layout';

const Layout = ({ children }) => {
  return (
    <Box as='main' bg='black' color='white'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>D4nielJ&apos;s l4nding</title>
      </Head>
      <Container maxW='container.md'>{children}</Container>
    </Box>
  );
};

export default Layout;
