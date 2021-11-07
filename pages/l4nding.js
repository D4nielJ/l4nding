import { Heading, HStack, Link, VStack } from '@chakra-ui/layout';
import { Box, Text } from '@chakra-ui/react';
import Icon from '@chakra-ui/icon';
import { HiOutlineMail } from 'react-icons/hi';
import {
  RiLinkedinBoxLine,
  RiTwitterLine,
  RiTelegramLine,
} from 'react-icons/ri';

const l4nding = () => {
  return (
    <VStack minH='100vh' pt={12} textAlign='center'>
      <Box>
        <Heading as="h1" size="lg">DANIEL J</Heading>
        <Text fontWeight="light">I&apos;m a Web Developer</Text>
      </Box>
      <Box>
        {/* Image */}
        {/* Background */}
      </Box>
      <Text>We can build cool stuff, together.</Text>
      <VStack>
        <Link>Website</Link>
        <Link>Resume</Link>
        <Link>GitHub</Link>
      </VStack>
      <HStack>
        <Icon as={HiOutlineMail}></Icon>
        <Icon as={RiLinkedinBoxLine}></Icon>
        <Icon as={RiTwitterLine}></Icon>
        <Icon as={RiTelegramLine}></Icon>
      </HStack>
    </VStack>
  );
};

export default l4nding;
