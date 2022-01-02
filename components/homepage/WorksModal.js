import {
  Box,
  VStack,
  Text,
  HStack,
  Icon,
  AspectRatio,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import ToggleMenu from '../navbar/Toggle';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { SquareButton } from '../shared';

const WorksModal = ({ work, toggleOpen, ...props }) => {
  return (
    <Box
      position='fixed'
      inset={0}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      <VStack
        overflow='auto'
        w='full'
        h='full'
        bg='black.900'
        color='white'
        py={8}
        px={{ base: 8, md: 32 }}
      >
        {/* Controles */}
        <HStack w='full' justify='space-between' mb={4}>
          <HStack spacing={4}>
            <Icon as={VscChevronLeft} fontSize='2xl' />
            <Icon as={VscChevronRight} fontSize='2xl' />
          </HStack>
          <ToggleMenu
            open={open}
            onClick={() => toggleOpen()}
            onKeyDown={(e) => handleToggleKey(e)}
            color={'#fff'}
          />{' '}
        </HStack>

        {/* Slider */}
        <AspectRatio
          w='full'
          ratio={4 / 3}
          onClick={toggleOpen}
          mb={[4, 4, 6]}
          mr={[0, 0, 10]}
        >
          <Box h='full' w='full'>
            <Image
              src={`/images/projects/desktop/${work.imgs[0]}`}
              alt={work.title}
              quality='100'
              layout='fill'
              objectFit='cover'
            />
          </Box>
        </AspectRatio>

        {/* Info más links */}
        <Flex direction='column' alignItems='flex-start'>
          <Text
            fontWeight='light'
            fontSize={{ base: '3xl', md: '4xl' }}
            onClick={toggleOpen}
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
            {work.longDesc}
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
          <HStack>
            <SquareButton
              fontSize={{ base: 'sm', md: 'md' }}
              px={6}
              py={3}
              href='/contact'
              text='Live'
              onClick={toggleOpen}
            />
            <SquareButton
              fontSize={{ base: 'sm', md: 'md' }}
              px={6}
              py={3}
              href='/contact'
              text='GitHub'
              onClick={toggleOpen}
            />
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default WorksModal;
