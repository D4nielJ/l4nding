import { Flex, Text } from '@chakra-ui/react';
import ProfilePicture from '../components/homepage/ProfilePicture';

import Layout from '../components/layouts/Main';
import { Icons, SquareButton } from '../components/shared';

const l4nding = () => {
  return (
    <Layout>
      <Flex direction='column' align='center' pt={28}>
        <ProfilePicture mb={12} />
        <Icons iconSize='2xl' justify='center' spacing={4} mb={16} />
        <Text fontWeight='light' fontSize={{ base: 'md', md: 'xl' }}>
          I&apos;m a Web Developer
        </Text>
        <Text
          fontWeight='bold'
          fontSize={{ base: '3xl', md: '5xl' }}
          letterSpacing='tighter'
          lineHeight='shorter'
          maxW='20ch'
          textAlign='center'
        >
          We can build awesome stuff, together.
        </Text>
        <SquareButton />
      </Flex>
    </Layout>
  );
};

export default l4nding;
