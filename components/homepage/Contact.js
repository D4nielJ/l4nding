import React from 'react';
import { Box, Text, Divider, VStack } from '@chakra-ui/react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Box as='section' id='contact' mb={28}>
      <Text
        fontWeight='bold'
        fontSize={{ base: '3xl', md: '4xl' }}
        letterSpacing='tighter'
        lineHeight='1'
        textAlign={['center', 'center', 'left']}
        mb={2}
        zIndex={2}
      >
        Get in touch.
      </Text>
      <Divider opacity='1' mb={12} />
      <VStack align='stretch'>
        <Text
          fontWeight='light'
          maxW='64ch'
          fontSize={{ base: 'lg', md: '2xl' }}
          mb={6}
        >
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. I would love to
          help with it.
        </Text>
        <ContactForm />
      </VStack>
    </Box>
  );
};

export default Contact;
