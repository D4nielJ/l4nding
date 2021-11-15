import Link from 'next/link';
import { Box, Flex } from '@chakra-ui/layout';
import { AnimatePresence, useCycle } from 'framer-motion';
import ToggleMenu from './Toggle.js';
import { Logo, Backdrop } from '../shared';
import NavHeader from './NavHeader.js';

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
    <Flex justifyContent='space-between'>
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
            <Box
              as='nav'
              key='nav'
              position='absolute'
              top={0}
              left={{ base: 0, md: 'auto' }}
              right={{ base: 'auto', md: 0 }}
              w={{ base: 'full', md: 'auto' }}
              h='full'
              display='flex'
              flexDirection='column'
              justifyContent='space-between'
              pt={8}
              px={6}
              color='white'
              bg='black'
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => handleToggleKey(e)}
            >
              <NavHeader
                open={open}
                toggleOpen={toggleOpen}
                onClick={() => toggleOpen()}
                onKeyDown={handleToggleKey}
              />
            </Box>
          </Backdrop>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default Navbar;
