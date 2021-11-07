import { Heading, HStack, Link, VStack } from '@chakra-ui/layout';
import { Box, Text } from '@chakra-ui/react';

const l4nding = () => {
  return (
    <VStack minH='100vh' pt={12} textAlign='center'>
      <Box>
        <Heading>Hello world</Heading>
        <Text>I&apos;m a Web Developer</Text>
      </Box>
      <Box>
        {/* Image */}
        {/* Background */}
      </Box>
      <VStack>
        <Link>Website</Link>
        <Link>Resume</Link>
        <Link>GutHub</Link>
      </VStack>
      <HStack>
        
      </HStack>
    </VStack>
  );
};

export default l4nding;
