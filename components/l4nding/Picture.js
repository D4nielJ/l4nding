import { Box, AspectRatio } from '@chakra-ui/react';
import { MotionBox } from '../utils';
import Image from 'next/image';

import profilePicture from '../../public/images/profile_l4nding.jpg';
import bgPicture from '../../public/images/bg_l4nding.jpg';

const Picture = () => {
  return (
    <Box minW='159px' w='full' h='full' position='relative'>
      <MotionBox
        position='absolute'
        top='0'
        right='0'
        left='0'
        bottom='0'
        initial={{ rotate: -18 }}
        animate={{ rotate: -6 }}
        transition={{ yoyo: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <AspectRatio w='full' ratio={3 / 4}>
          <Box w='full' h='full' rounded='lg'>
            <Image
              src={bgPicture}
              alt='Daniel Jaramillo'
              layout='fill'
              quality='100'
              rounded='lg'
              placeholder='blur'
            />
          </Box>
        </AspectRatio>
      </MotionBox>
      <AspectRatio w='full' ratio={3 / 4}>
        <Box w='full' h='full' rounded='lg'>
          <Image
            src={profilePicture}
            alt='Daniel Jaramillo'
            layout='fill'
            quality='100'
            placeholder='blur'
          />
        </Box>
      </AspectRatio>
    </Box>
  );
};

export default Picture;
