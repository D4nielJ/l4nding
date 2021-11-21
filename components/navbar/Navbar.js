import NextLink from 'next/link';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { AnimatePresence, useCycle } from 'framer-motion';

import { Logo, Backdrop, Icons } from '../shared';
import ToggleMenu from './Toggle.js';
import NavHeader from './NavHeader.js';
import NavLinks from './NavLinks.js';

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
      <NextLink href='/'>
        <a>
          <Logo />
        </a>
      </NextLink>
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
              py={8}
              px={{base: 8, md: 32}}
              color='white'
              bg='black'
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => handleToggleKey(e)}
            >
              <Box>
                <NavHeader
                  open={open}
                  toggleOpen={toggleOpen}
                  onClick={() => toggleOpen()}
                  onKeyDown={handleToggleKey}
                />
                <NavLinks
                  onClick={() => toggleOpen()}
                  onKeyDown={(e) => handleToggleKey(e)}
                />
              </Box>
              <Box pb={8} mr={{base: 0, md: 32}}>
                <Icons justify='flex-start' spacing={4} />
              </Box>
            </Box>
          </Backdrop>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default Navbar;
