import { Box } from '@chakra-ui/react';
import { Image, MotionBox } from '../utils';

import profilePicture from '../../public/images/profile_l4nding.jpg';
import bgPicture from '../../public/images/bg_l4nding.jpg';

const Picture = () => {
  return (
    <Box position='relative'>
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
        <Image
          src={bgPicture}
          alt='Daniel Jaramillo'
          width='159px'
          height='212px'
          quality='100'
          rounded='lg'
          placeholder='blur'
        />
      </MotionBox>
      <Image
        src={profilePicture}
        alt='Daniel Jaramillo'
        width='159px'
        height='212px'
        quality='100'
        rounded='lg'
        placeholder='blur'
      />
    </Box>
  );
};

export default Picture;
