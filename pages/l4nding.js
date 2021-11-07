import {
  Heading,
  HStack,
  Link,
  VStack,
  Stack,
  Box,
  Text,
} from '@chakra-ui/react';
import Icon from '@chakra-ui/icon';

import { MotionBox, Image } from '../components/utils';

import { HiOutlineMail } from 'react-icons/hi';
import {
  RiLinkedinBoxLine,
  RiTwitterLine,
  RiTelegramLine,
} from 'react-icons/ri';

import profilePicture from '../public/images/profile_l4nding.jpg';
import bgPicture from '../public/images/bg_l4nding.jpg';

const l4nding = () => {
  return (
    <VStack
      minH='100vh'
      py={16}
      px={12}
      textAlign='center'
      justify='space-between'
    >
      <Box>
        <Heading as='h1' size='md' letterSpacing='widest' fontWeight='bold'>
          DANIEL J.
        </Heading>
        <Text fontWeight='light'>I&apos;m a Web Developer</Text>
      </Box>

      <Box position='relative'>
        <MotionBox
          position='absolute'
          top='0'
          right='0'
          left='0'
          bottom='0'
          initial={{ rotate: -18 }}
          animate={{ rotate: -6 }}
          transition={{ yoyo: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <Image
            src={bgPicture}
            alt='Daniel Jaramillo'
            width='159px'
            height='212px'
            quality='100'
            rounded='lg'
          />
        </MotionBox>
          <Image
            src={profilePicture}
            alt='Daniel Jaramillo'
            width='159px'
            height='212px'
            quality='100'
            rounded='lg'
          />
      </Box>

      <Text
        fontWeight='bold'
        fontSize='3xl'
        letterSpacing='tighter'
        lineHeight='shorter'
      >
        We can build cool stuff, together.
      </Text>

      <Stack align='stretch' w='full' px={4}>
        <Link
          href='https://d4nielj.netlify.app/'
          bg='black.800'
          py={2}
          fontWeight='light'
          isExternal
        >
          Website
        </Link>
        <Link
          href='../public/cv/d4nielj-cv.pdf'
          bg='black.800'
          py={2}
          fontWeight='light'
          download
        >
          Resume
        </Link>
        <Link
          href='https://d4nielj.netlify.app/'
          bg='black.800'
          py={2}
          fontWeight='light'
          isExternal
        >
          GitHub
        </Link>
      </Stack>

      <HStack width='full' justify='space-around'>
        <a
          href='mailto:d4niel.djm@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon fontSize='3xl' as={HiOutlineMail} />
        </a>
        <a
          href='https://www.linkedin.com/in/d4nielj/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon fontSize='3xl' as={RiLinkedinBoxLine} />
        </a>
        <a
          href='https://www.twitter.com/d4niel_jm/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon fontSize='3xl' as={RiTwitterLine} />
        </a>
        <a
          href='https://www.telegram.me/d4nielj/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon fontSize='3xl' as={RiTelegramLine} />
        </a>
      </HStack>
    </VStack>
  );
};

export default l4nding;
