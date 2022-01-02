import React from 'react';
import {
  Flex,
  Text,
  AspectRatio,
  Box,
  Divider,
  HStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useCycle } from 'framer-motion';
import { SquareButton } from '../shared';

const Work = ({ work, last, ...props }) => {
  const [open, setOpen] = useCycle(false, true);
  return (
    <Box w='full' {...props}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='flex-start'
        w='full'
        spacing={3}
        py={4}
      >
        <Text display={{ md: 'none' }} fontWeight='light' fontSize='xl' mb={2}>
          {work.title}
        </Text>
        <AspectRatio
          w='full'
          ratio={4 / 3}
          onClick={setOpen}
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
            display={{ base: 'none', md: 'block' }}
            fontWeight='light'
            fontSize='4xl'
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
          />
        </Flex>
      </Flex>
      {!last && <Divider opacity='0.3' />}
    </Box>
  );
};

export default Work;
