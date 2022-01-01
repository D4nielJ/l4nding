import React from 'react';
import {
  Flex,
  Text,
  AspectRatio,
  Box,
  Divider,
  HStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useCycle } from 'framer-motion';
import { SquareButton } from '../shared';

const Work = ({ work, ...props }) => {
  const [open, setOpen] = useCycle(false, true);
  return (
    <Flex
      direction='column'
      alignItems='flex-start'
      w='full'
      spacing={3}
      py={4}
    >
      <Text fontWeight='light' fontSize='xl' mb={2}>
        {work.title}
      </Text>
      <AspectRatio w='full' ratio={4 / 3} onClick={setOpen} mb={4}>
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
      <HStack alignItems='baseline' mb={2}>
        <Text fontWeight='light' fontSize='lg'>
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
        <Text fontWeight='light'>{work.role}</Text>{' '}
        <Box
          position='relative'
          bottom={0.5}
          h={1}
          w={1}
          bg='white'
          rounded='full'
        />
        <Text fontWeight='light'>{work.year}</Text>
      </HStack>
      <Text fontWeight='light' mb={4}>
        {work.shortDesc}
      </Text>
      <HStack mb={4}>
        {work &&
          work.tags.map((tag) => (
            <Text
              fontWeight='light'
              fontSize='sm'
              border='1px'
              borderColor='black.600'
              px={3}
              key={tag}
              noOfLines={1}
            >
              {tag}
            </Text>
          ))}
      </HStack>
      <Box as='button' mb={6}>
        <SquareButton
          fontSize={{ base: 'sm', md: 'md' }}
          px={6}
          py={3}
          href='/contact'
          text='See project'
        />
      </Box>
      <Divider opacity='1' />
    </Flex>
  );
};

export default Work;
