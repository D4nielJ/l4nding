import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Icons } from '../shared';

const Footer = () => {
  return (
    <Flex
      flexDir='column'
      color='black.900'
      py={14}
      align='center'
      maxW='container.xl'
    >
      <Text
        fontWeight='bold'
        fontSize={{ base: '2xl', md: '3xl' }}
        letterSpacing='tighter'
        lineHeight='shorter'
        maxW='20ch'
        mb={1}
      >
        d4niel.djm@gmail.com
      </Text>
      <Text fontWeight='light' fontSize={{ base: 'lg', md: 'xl' }} mb={12}>
        Let&apos;s talk
      </Text>
      <Icons justify='center' spacing={4} mb={6} iconSize='2xl' />
      <Text fontWeight='light' fontSize={{ base: 'md', md: 'lg' }} mb={2}>
        © 2021 - Daniel J
      </Text>
      <Text
        fontWeight='light'
        fontSize={{ base: 'md', md: 'lg' }}
        textAlign='center'
      >
        Made with React, Tailwindcss, Motion by Framer, and more.
      </Text>
    </Flex>
  );
};

export default Footer;
