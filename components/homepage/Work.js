import React, { useEffect } from 'react';
import {
  Flex,
  Text,
  AspectRatio,
  Box,
  Divider,
  HStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { AnimatePresence, useCycle } from 'framer-motion';
import { Backdrop, SquareButton } from '../shared';
import WorksModal from './WorksModal';
import { controlBodyFlow } from '../utils';

const Work = ({ work, last, ...props }) => {
  const [open, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    controlBodyFlow(open);
  }, [open]);

  return (
    <Box w='full' {...props}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='flex-start'
        w='full'
        spacing={3}
        py={4}
      >
        <Text
          display={{ md: 'none' }}
          fontWeight='light'
          fontSize='xl'
          mb={2}
          cursor='pointer'
          _onHover={{ textDecor: 'underline' }}
          onClick={toggleOpen}
        >
          {work.title}
        </Text>
        <AspectRatio
          w='full'
          ratio={4 / 3}
          onClick={toggleOpen}
          cursor='pointer'
          mb={[4, 4, 6]}
          mr={[0, 0, 10]}
        >
          <Box w='full' h='full'>
            <Image
              src={`/images/projects/desktop/${work.imgs[0]}`}
              alt={work.title}
              quality='100'
              layout='fill'
              objectFit='cover'
            />
          </Box>
        </AspectRatio>
        <Flex direction='column' alignItems='flex-start'>
          <Text
            display={{ base: 'none', md: 'inline-block' }}
            fontWeight='light'
            fontSize='4xl'
            onClick={toggleOpen}
            cursor='pointer'
            _hover={{ textDecor: 'underline' }}
          >
            {work.title}
          </Text>
          <HStack alignItems='baseline' mb={[2, 2, 5]}>
            <Text fontWeight='light' fontSize={{ base: 'lg', md: 'xl' }}>
              {work.company}
            </Text>{' '}
            <Box
              position='relative'
              bottom={0.5}
              h={1}
              w={1}
              bg='white'
              rounded='full'
            />
            <Text fontWeight='light' fontSize={{ md: 'lg' }}>
              {work.role}
            </Text>{' '}
            <Box
              position='relative'
              bottom={0.5}
              h={1}
              w={1}
              bg='white'
              rounded='full'
            />
            <Text fontWeight='light' fontSize={{ md: 'lg' }}>
              {work.year}
            </Text>
          </HStack>
          <Text fontWeight='light' fontSize={{ md: 'lg' }} mb={[4, 4, 5]}>
            {work.shortDesc}
          </Text>
          <Flex wrap='wrap' mb={[2, 2, 3]}>
            {work &&
              work.tags.map((tag) => (
                <Text
                  fontWeight='light'
                  fontSize={{ base: 'sm', md: 'md' }}
                  border='1px'
                  borderColor='black.600'
                  px={3}
                  key={tag}
                  mr={2}
                  mb={2}
                >
                  {tag}
                </Text>
              ))}
          </Flex>
          <SquareButton
            fontSize={{ base: 'sm', md: 'md' }}
            px={6}
            py={3}
            href='/contact'
            text='See project'
            onClick={toggleOpen}
          />
        </Flex>
      </Flex>
      {!last && <Divider opacity='0.3' />}
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {open && (
          <Backdrop key='backdrop' toggleOpen={toggleOpen}>
            <WorksModal work={work} toggleOpen={toggleOpen} />
          </Backdrop>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Work;
