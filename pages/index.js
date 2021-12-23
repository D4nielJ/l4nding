import { Flex, Text } from '@chakra-ui/react';
import ProfilePicture from '../components/homepage/ProfilePicture';

import Layout from '../components/layouts/Main';
import { Icons, SquareButton } from '../components/shared';

const l4nding = () => {
  return (
    <Layout>
      <Flex
        direction={['column', 'column', 'row-reverse']}
        align='center'
        py={[28, 28, 40]}
      >
        <Flex direction={['column', 'column', 'row']}>
          <ProfilePicture mb={[12, 12, 0]} mr={[0, 0, 24]} />
          <Icons
            iconSize={['2xl', '2xl', '3xl']}
            direction={['row', 'row', 'column']}
            justify='center'
            spacing={4}
            mb={[16, 16, 0]}
          />
        </Flex>
        <Flex
          direction='column'
          align={['center', 'center', 'flex-start']}
          flexGrow='1'
        >
          <Text fontWeight='light' fontSize={{ base: 'md', md: 'xl' }}>
            I&apos;m a Web Developer
          </Text>
          <Text
            fontWeight='bold'
            fontSize={{ base: '3xl', md: '6xl' }}
            letterSpacing='tighter'
            lineHeight='1'
            maxW='19ch'
            textAlign={['center', 'center', 'left']}
            mb={12}
          >
            We can build awesome stuff, together.
          </Text>
          <SquareButton href='/contact' text="Let's work" />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default l4nding;
