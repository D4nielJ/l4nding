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
import React, { useEffect, useState } from 'react';
import ToggleMenu from '../navbar/Toggle';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';
import { SquareButton } from '../shared';
import works from '../../lib/projects';

const WorksModal = ({ work, toggleOpen, ...props }) => {
  const [selectedWork, setSelectedWork] = useState(works.indexOf(work));
  const {
    title,
    imgs,
    company,
    role,
    year,
    longDesc,
    liveURL,
    sourceURL,
    tags,
  } = works[selectedWork];

  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(false);

  useEffect(() => {
    if (selectedWork < 1) {
      setDisableLeft(true);
    } else {
      setDisableLeft(false);
    }
    if (selectedWork > works.length - 2) {
      setDisableRight(true);
    } else {
      setDisableRight(false);
    }
  }, [selectedWork]);

  const handlePrev = () => {
    setSelectedWork((prev) => prev - 1);
  };

  const handleNext = () => {
    setSelectedWork((prev) => prev + 1);
  };

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
        mx='auto'
      >
        <Box maxW='container.xl' px={{ base: 8, md: 20 }}>
          {/* Controles */}
          <HStack w='full' justify='space-between' mb={8}>
            <HStack spacing={4}>
              <button type='button' onClick={handlePrev} disabled={disableLeft}>
                <Icon
                  as={VscChevronLeft}
                  fontSize='2xl'
                  opacity={disableLeft ? 0.4 : 1}
                />
              </button>
              <button
                type='button'
                onClick={handleNext}
                disabled={disableRight}
              >
                <Icon
                  as={VscChevronRight}
                  fontSize='2xl'
                  opacity={disableRight ? 0.4 : 1}
                />
              </button>
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
              mb={[4, 4, 6]}
              mr={[0, 0, 10]}
            >
              <Box h='full' w='full'>
                <Image
                  src={`/images/projects/desktop/${imgs[0]}`}
                  alt={title}
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
              order={{ md: -1 }}
            >
              {title}
            </Text>
            <HStack alignItems='baseline' order={{ md: -1 }} mb={[2, 2, 3]}>
              <Text fontWeight='light' fontSize={{ base: 'lg', md: 'xl' }}>
                {company}
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
                {role}
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
                {year}
              </Text>
            </HStack>
            <Text fontWeight='light' fontSize={{ md: 'lg' }} mb={[4, 4, 5]}>
              {longDesc}
            </Text>
            <Flex wrap='wrap' mb={[2, 2, 3]}>
              {tags &&
                tags.map((tag) => (
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
                href={liveURL}
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
                href={sourceURL}
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
