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
import ButtonLink from '../components/l4nding/button';
import IconLink from '../components/l4nding/icon';

import { HiOutlineMail } from 'react-icons/hi';
import {
  RiLinkedinBoxLine,
  RiTwitterLine,
  RiTelegramLine,
  RiDownloadLine,
} from 'react-icons/ri';

import profilePicture from '../public/images/profile_l4nding.jpg';
import bgPicture from '../public/images/bg_l4nding.jpg';

const l4nding = () => {
  return (
    <VStack
      minH='100vh'
      py={{ base: 12, md: 20 }}
      px={{ base: 12, md: 0 }}
      textAlign='center'
      justifyContent={{ base: 'center', md: 'center' }}
      spacing={{ base: 12, md: 20 }}
    >
      <Stack
        spacing={12}
        direction={{ base: 'column', md: 'row-reverse' }}
        textAlign={{ base: 'center', md: 'left' }}
        alignItems={{ base: 'initial', md: 'center' }}
      >
        <Box position='relative' top={{base: 0, md: 8}}>
          <Heading
            as='h1'
            fontSize={{ base: 'xl', md: '3xl' }}
            letterSpacing='widest'
            fontWeight='bold'
          >
            DANIEL J.
          </Heading>
          <Text fontWeight='light' fontSize={{ base: 'md', md: 'xl' }}>
            I&apos;m a Web Developer
          </Text>
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
      </Stack>

      <Text
        fontWeight='bold'
        fontSize={{ base: '3xl', md: '5xl' }}
        letterSpacing='tighter'
        lineHeight='shorter'
        maxW="20ch"
      >
        We can build awesome stuff, together.
      </Text>

      <VStack spacing={8}>
        <Stack
          align='stretch'
          width='full'
          px={4}
          spacing={[4, 4, 8]}
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'flex-start', md: 'space-between' }}
        >
          <ButtonLink href='https://d4nielj.netlify.app/' isExternal>
            Website
          </ButtonLink>
          <ButtonLink href='https://github.com/d4nielj' isExternal>
            GitHub
          </ButtonLink>
          <ButtonLink href='../public/cv/d4nielj-cv.pdf' download>
            Resume
            <Icon ml={1} as={RiDownloadLine} />
          </ButtonLink>
        </Stack>
        <HStack width='full' justify='center' spacing={[4, 4, 16]}>
          <IconLink href='mailto:d4niel.djm@gmail.com' icon={HiOutlineMail} />
          <IconLink
            href='https://www.linkedin.com/in/d4nielj/'
            icon={RiLinkedinBoxLine}
          />
          <IconLink
            href='https://www.twitter.com/d4niel_jm/'
            icon={RiTwitterLine}
          />
          <IconLink
            href='https://www.telegram.me/d4nielj/'
            icon={RiTelegramLine}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default l4nding;
