import { Box, Container } from '@chakra-ui/layout';
import Head from 'next/head';

const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Daniel Jaramillo landing page" />
        <title>Daniel Jaramillo - @d4nielj</title>
      </Head>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout