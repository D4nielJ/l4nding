import Link from 'next/link';
import { Box } from '@chakra-ui/layout';
import Logo from '../shared/Logo';
import ToggleMenu from './Toggle.js';
import { useCycle } from 'framer-motion';

const Navbar = () => {
  const [open, toggleOpen] = useCycle(false, true);

  const handleToggleKey = (e) => {
    if (e.keyCode === 13) {
      toggleOpen();
    }
    if (e.keyCode === 27) {
      toggleOpen();
    }
  };

  return (
    <Box as='header'>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <ToggleMenu
        open={open}
        onClick={() => toggleOpen()}
        onKeyDown={(e) => handleToggleKey(e)}
        color={'#fff'}
      />
    </Box>
  );
};

export default Navbar;
