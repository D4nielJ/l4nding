import { HStack, VStack, Stack, Box, Text } from '@chakra-ui/react';
import Icon from '@chakra-ui/icon';

import { Picture, ButtonLink, IconLink } from '../components/l4nding';

import { HiOutlineMail } from 'react-icons/hi';
import {
  RiLinkedinBoxLine,
  RiTwitterLine,
  RiTelegramLine,
  RiDownloadLine,
} from 'react-icons/ri';

import Logo from '../components/shared/Logo';
import LandLayout from '../components/layouts/L4ndingLayout';

const l4nding = () => {
  return (
    <LandLayout>
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
          <Box position='relative' top={{ base: 0, md: 8 }}>
            <Logo />
            <Text fontWeight='light' fontSize={{ base: 'md', md: 'xl' }}>
              I&apos;m a Web Developer
            </Text>
          </Box>
          <Picture />
        </Stack>
        <Text
          fontWeight='bold'
          fontSize={{ base: '3xl', md: '5xl' }}
          letterSpacing='tighter'
          lineHeight='shorter'
          maxW='20ch'
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
    </LandLayout>
  );
};

export default l4nding;
