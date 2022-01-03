import NextLink from 'next/link';
import { Box, Flex, Link, VStack } from '@chakra-ui/react';
import { AnimatePresence, useCycle, motion } from 'framer-motion';

import { Logo, Backdrop, Icons } from '../shared';
import ToggleMenu from './Toggle.js';
import NavHeader from './NavHeader.js';
import NavLinks from './NavLinks.js';
import { controlBodyFlow } from '../utils';
import { useEffect, useState } from 'react';

const MotionFlex = motion(Flex);

const navbarVariants = {
  hide: { y: -70 },
  visible: { y: 0 },
};

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

  useEffect(() => {
    controlBodyFlow(open);
  }, [open]);

  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const prev = position;
      const actual = window.pageYOffset;
      setDirection(actual - prev);
      setPosition(actual);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position]);

  useEffect(() => {
    if (position > 100 && direction > 0) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [direction, position]);

  return (
    <MotionFlex
      bg='black.900'
      dropShadow='2xl'
      position='fixed'
      top={0}
      left={0}
      right={0}
      zIndex='3'
      variants={navbarVariants}
      animate={hide ? 'hide' : 'visible'}
    >
      <Flex
        w='full'
        mx='auto'
        maxW='container.xl'
        pt={8}
        pb={4}
        px={{ base: 8, md: 20 }}
        justifyContent='space-between'
      >
        <NextLink href='/#home'>
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
            <Backdrop key='backdrop' open={open} toggleOpen={toggleOpen}>
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
                px={{ base: 8, md: 32 }}
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
                <VStack
                  align='flex-start'
                  spacing={4}
                  pb={8}
                  mr={{ base: 0, md: 32 }}
                >
                  <Icons
                    justify='flex-start'
                    spacing={4}
                    iconSize={{ base: '2xl', md: '3xl' }}
                  />
                  <Link
                    fontWeight='light'
                    fontSize={{ base: 'md', md: 'lg' }}
                    textAlign='center'
                    href='mailto:d4niel.djm@gmail.com'
                  >
                    d4niel.djm@gmail.com
                  </Link>
                </VStack>
              </Box>
            </Backdrop>
          )}
        </AnimatePresence>
      </Flex>
    </MotionFlex>
  );
};

export default Navbar;
