import { Text, Link } from '@chakra-ui/react';
import React from 'react';

const Links = () => {
  return (
    <Text
      fontWeight='light'
      fontSize={{ base: 'md', md: 'lg' }}
      textAlign='center'
    >
      Made with{' '}
      <Link
        href='https://nextjs.org/'
        target='_blank'
        rel='noopener noreferrer'
        textDecor='underline'
      >
        Next.js
      </Link>
      ,{' '}
      <Link
        href='https://chakra-ui.com/'
        target='_blank'
        rel='noopener noreferrer'
        textDecor='underline'
      >
        Chakra UI
      </Link>
      ,{' '}
      <Link
        href='https://www.framer.com/motion/'
        target='_blank'
        rel='noopener noreferrer'
        textDecor='underline'
      >
        Motion by Framer
      </Link>
      , and more.
    </Text>
  );
};

export default Links;
