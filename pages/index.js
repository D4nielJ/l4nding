import { Flex, Text } from '@chakra-ui/react';

import Layout from '../components/layouts/Main';
import { ProfilePicture, About, Works } from '../components/homepage';
import { Icons, SquareButton } from '../components/shared';

const l4nding = () => {
  return (
    <Layout>
      <Flex
        direction={['column', 'column', 'row-reverse']}
        align='center'
        py={[28, 28, 40]}
        mb={[4, 4, 8]}
      >
        <Flex direction={['column', 'column', 'row']}>
          <ProfilePicture mb={[12, 12, 0]} mr={[0, 0, 40]} />
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
            fontSize={{ base: '3xl', md: '5xl' }}
            letterSpacing='tighter'
            lineHeight='1'
            maxW={{ base: 'none', md: '19ch' }}
            textAlign={['center', 'center', 'left']}
            mb={12}
            zIndex={2}
          >
            We can build awesome stuff, together.
          </Text>
          <SquareButton href='/contact' text="Let's work" />
        </Flex>
      </Flex>
      <About />
      <Works />
    </Layout>
  );
};

export default l4nding;
