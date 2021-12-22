import { Stack, Text } from '@chakra-ui/react';
import ProfilePicture from '../components/homepage/ProfilePicture';

import Layout from '../components/layouts/Main';

const l4nding = () => {
  return (
    <Layout>
      <Stack direction='column' align='center' pt={28}>
        <ProfilePicture />
        {/* SocialMedia Icons */}
        <Text fontWeight='light' fontSize={{ base: 'md', md: 'xl' }}>
          I&apos;m a Web Developer
        </Text>
        <Text
          fontWeight='bold'
          fontSize={{ base: '3xl', md: '5xl' }}
          letterSpacing='tighter'
          lineHeight='shorter'
          maxW='20ch'
        >
          We can build awesome stuff, together.
        </Text>
        {/* Let's work button */}
      </Stack>
    </Layout>
  );
};

export default l4nding;
