import { Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { Icons } from '../shared';
import Links from './Links';

const Footer = () => {
  return (
    <Flex
      flexDir='column'
      color='black.900'
      py={12}
      align='center'
      maxW='container.xl'
    >
      <Link
        fontWeight='bold'
        fontSize={{ base: '2xl', md: '3xl' }}
        letterSpacing='tighter'
        lineHeight='shorter'
        maxW='20ch'
        mb={1}
        href='mailto:d4niel.djm@gmail.com'
      >
        d4niel.djm@gmail.com
      </Link>
      <Text fontWeight='light' fontSize={{ base: 'lg', md: 'xl' }} mb={20}>
        Let&apos;s talk
      </Text>
      <Icons justify='center' spacing={4} mb={6} iconSize='2xl' />
      <Text fontWeight='light' fontSize={{ base: 'md', md: 'lg' }} mb={2}>
        © 2021 - Daniel J
      </Text>
      <Links />
    </Flex>
  );
};

export default Footer;
