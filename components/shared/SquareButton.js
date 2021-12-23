import React, { useState } from 'react';
import { HStack, Text, Box } from '@chakra-ui/react';
import { Link, MotionBox } from '../utils';
import { useCycle } from 'framer-motion';

const SquareButton = ({
  href = '',
  text = '',
  color = 'black.900',
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);

  const variants = {
    hover: {
      y: [0, -20],
    },
    notHover: {
      y: [0, 0],
    },
  };

  return (
    <Box
      onMouseOver={() => setIsHover(true)}
      onFocus={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onBlur={() => setIsHover(false)}
    >
      <Link
        href=''
        rounded='none'
        color='black'
        fontWeight='normal'
        px={10}
        py={8}
        fontSize={{ base: 'md', md: 'xl' }}
        {...props}
      >
        <HStack spacing={2}>
          <Text>{text}</Text>
          <MotionBox
            as='span'
            h={1.5}
            w={1.5}
            rounded='full'
            bg={color}
            animate={isHover ? 'hover' : 'notHover'}
            variants={variants}
            transition={{
              duration: 0.3,
              yoyo: Infinity,
              type: 'spring',
            }}
          />
        </HStack>
      </Link>
    </Box>
  );
};

export default SquareButton;
