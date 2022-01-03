import React from 'react';
import { AspectRatio, Box, Flex } from '@chakra-ui/react';
import { Image, MotionBox } from '../utils';
import photo from '../../public/images/photo.jpg';
import photoBG from '../../public/images/photo-bg.jpg';

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
          <Box>
            <Image
              src={photoBG}
              quality='100'
              alt='Portrait of Daniel J.'
              rounded='full'
            />
          </Box>
        </AspectRatio>
      </MotionBox>
      <AspectRatio w={[48, 48, 56]} ratio={1}>
        <Box>
          <Image
            src={photo}
            quality='100'
            alt='Portrait of Daniel J.'
            rounded='full'
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
