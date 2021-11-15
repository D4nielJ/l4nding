import Link from 'next/link';
import { Box, HStack } from '@chakra-ui/layout';
import { Logo } from '../shared';
import ToggleMenu from './Toggle';

const NavHeader = ({ open, toggleOpen, handleToggleKey }) => {
  return (
    <HStack justify='space-between' align='center'>
      <Box display={{ base: 'auto', md: 'none' }}>
        <Link href='/'>
          <a onClick={() => toggleOpen()} onKeyDown={(e) => handleToggleKey(e)}>
            <Logo />
          </a>
        </Link>
      </Box>
      <ToggleMenu
        open={open}
        onClick={() => toggleOpen()}
        onKeyDown={(e) => handleToggleKey(e)}
        color={'#fff'}
      />{' '}
    </HStack>
  );
};

export default NavHeader;
