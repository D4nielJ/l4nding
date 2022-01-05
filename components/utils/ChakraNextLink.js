import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';

const Link = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Button as='a' _hover={{ bg: 'auto' }} {...props}>
        {children}
      </Button>
    </NextLink>
  );
};

export default Link;
