import Link from 'next/link';
import { HStack } from '@chakra-ui/layout';
import { AnimatePresence, useCycle } from 'framer-motion';
import ToggleMenu from './Toggle.js';
import { MotionBox } from '../utils';
import { Logo, Backdrop } from '../shared';


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
    <HStack as='header' justify='space-between' align='center'>
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
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {open && (
          <Backdrop
            key='backdrop'
            onClick={() => toggleOpen()}
            onKeyDown={(e) => handleToggleKey(e)}
          >
            <MotionBox as='nav'></MotionBox>
          </Backdrop>
        )}
      </AnimatePresence>
    </HStack>
  );
};

export default Navbar;
