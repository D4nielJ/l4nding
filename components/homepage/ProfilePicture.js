import React from 'react';
import { AspectRatio, Box } from '@chakra-ui/react';
import { Image, MotionBox } from '../utils';
import photo from '../../public/images/photo.jpg';
import photoBG from '../../public/images/photo-bg.jpg';

const ProfilePicture = () => {
  return (
    <Box position='relative'>
      <MotionBox
        position='absolute'
        top={-3}
        left={-3}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        <AspectRatio w={24} ratio={1}>
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
      <AspectRatio w={40} ratio={1}>
        <Box>
          <Image
            src={photo}
            quality='100'
            alt='Portrait of Daniel J.'
            rounded='full'
          />
        </Box>
      </AspectRatio>
    </Box>
  );
};

export default ProfilePicture;
