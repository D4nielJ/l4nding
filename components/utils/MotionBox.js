import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MyBox = () => {
  return <Box p={0} m={0} />;
};

const MotionBox = motion(Box);

export default MotionBox;
