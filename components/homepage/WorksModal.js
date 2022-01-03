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
import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';
import { SquareButton } from '../shared';

const WorksModal = ({ work, toggleOpen, ...props }) => {
  return (
    <Box position='fixed' inset={0} {...props}>
      <VStack
        onClick={(e) => e.stopPropagation()}
        overflow='auto'
        w='full'
        h='full'
        bg='black'
        color='white'
        py={8}
        px={{ base: 8, md: 32 }}
        mx='auto'
      >
        <Box maxW='container.xl' px={{ base: 8, md: 20 }}>
          {/* Controles */}
          <HStack w='full' justify='space-between' mb={8}>
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
          <Flex direction='column' alignItems='flex-start'>
            <AspectRatio
              w='full'
              ratio={{ base: 4 / 3, md: 5 / 3 }}
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
            <Text
              fontWeight='light'
              fontSize={{ base: '3xl', md: '4xl' }}
              onClick={toggleOpen}
              order={{ md: -1 }}
            >
              {work.title}
            </Text>
            <HStack alignItems='baseline' order={{ md: -1 }} mb={[2, 2, 3]}>
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
                text='Live'
                as='a'
                href={work.liveURL}
                target='_blank'
                rel='noopener noreferrer'
                icon={RiExternalLinkLine}
                iconSize='lg'
                spacing={2}
              />
              <SquareButton
                fontSize={{ base: 'sm', md: 'md' }}
                px={6}
                py={3}
                text='GitHub'
                as='a'
                href={work.sourceURL}
                target='_blank'
                rel='noopener noreferrer'
                icon={RiGithubLine}
                iconSize='lg'
                spacing={2}
              />
            </HStack>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default WorksModal;
