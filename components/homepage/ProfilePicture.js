import React from 'react';
import { AspectRatio, Box, Flex } from '@chakra-ui/react';
import { MotionBox, Image } from '../utils';
import NextImage from 'next/image';

const ProfilePicture = ({ ...props }) => {
  return (
    <Box position='relative' {...props}>
      <MotionBox
        position='absolute'
        top={[-3, -3, -8]}
        left={[-3, -3, -8]}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        <AspectRatio w={[24, 24, 28]} ratio={1}>
          <Box rounded='full'>
            <NextImage
              src='/images/bgpp_1_desktop.jpg'
              quality='100'
              alt='Portrait of Daniel J.'
              layout='fill'
            />
          </Box>
        </AspectRatio>
      </MotionBox>
      <AspectRatio w={[48, 48, 56]} ratio={1}>
        <Box rounded='full'>
          <Image
            src='/images/pp_1'
            quality='100'
            alt='Portrait of Daniel J.'
            layout='fill'
          />
        </Box>
      </AspectRatio>
      <Flex
        display={['none', 'none', 'flex']}
        direction='column'
        justify='center'
        position='absolute'
        right={-14}
        top={0}
        bottom={0}
        w={28}
      >
        <Box w='full' h='1px' bg='white' />
      </Flex>
    </Box>
  );
};

export default ProfilePicture;
