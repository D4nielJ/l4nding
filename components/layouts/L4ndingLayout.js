import Head from 'next/head';
import { Box, Container } from '@chakra-ui/layout';

const LandLayout = ({ children }) => {
  return (
    <Box as='main' bg='black.900' color='white'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="D4niel's landing page" />
        <meta name='author' content='Daniel Jaramillo' />
        <meta name='author' content='d4nielj' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@d4niel_jm' />
        <meta name='twitter:creator' content='@d4niel_jm' />
        <meta name='twitter:image' content='/card.png' />
        <meta property='og:site_name' content="D4nielJ's l4nding" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="D4nielj's l4nding" />
        <title>D4nielJ&apos;s l4nding</title>
      </Head>
      <Container>{children}</Container>
    </Box>
  );
};

export default LandLayout;
