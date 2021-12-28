import { Flex, Text } from '@chakra-ui/react';
import ProfilePicture from '../components/homepage/ProfilePicture';

import Layout from '../components/layouts/Main';
import { Icons, SquareButton } from '../components/shared';

const l4nding = () => {
  return (
    <Layout>
      <Text fontWeight='light' fontSize={{ base: 'md', md: 'xl' }}>
        I&apos;m a Web Developer
      </Text>
      <Text
        fontWeight='bold'
        fontSize={{ base: '3xl', md: '5xl' }}
        letterSpacing='tighter'
        lineHeight='1'
        maxW='19ch'
        textAlign={['center', 'center', 'left']}
        mb={12}
        zIndex={2}
      >
        We can build awesome stuff, together.
      </Text>
      <SquareButton href='/contact' text="Let's work" />
    </Layout>
  );
};

export default l4nding;
