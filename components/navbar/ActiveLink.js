import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

const ActiveLink = ({ name, href, onClick, onKeyDown }) => {
  const router = useRouter();

  return (
    <NextLink href={href} passHref>
      <Link
        onClick={onClick}
        onKeyDown={onKeyDown}
        textTransform='uppercase'
        fontSize="3xl"
        fontWeight='light'
        letterSpacing='wider'
        textDecoration={router.asPath === href && 'line-through'}
        color={router.asPath === href && 'white'}
        _hover={
          router.asPath === href
            ? { textDecoration: 'line-through', color: 'white' }
            : { textDecoration: 'none', color: 'white' }
        }
        transitionProperty='all'
        transitionTimingFunction='ease-in-out'
      >
        {name}
      </Link>
    </NextLink>
  );
};

export default ActiveLink;

// router.asPath === href
