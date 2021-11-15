import Head from 'next/head';
import { Box, Container } from '@chakra-ui/layout';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <Box bg='black.900' color='white' minH='100vh'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="D4niel's web" />
        <meta name='author' content='Daniel Jaramillo' />
        <meta name='author' content='d4nielj' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@d4niel_jm' />
        <meta name='twitter:creator' content='@d4niel_jm' />
        <meta name='twitter:image' content='/card.png' />
        <meta property='og:site_name' content="D4nielJ's web" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="D4nielj's web" />
        <title>D4nielJ&apos;s web</title>
      </Head>
      <Container pt={8} px={{base: 6, md: 20}} maxW='container.xl'>
        <Navbar />
        <Box as='main'>{children}</Box>
        {/* <Footer /> */}
      </Container>
    </Box>
  );
};

export default Layout;
