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
      y: [1, -23],
    },
    notHover: {
      y: [1, 1],
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
        bg='white'
        color='black'
        fontWeight='normal'
        px={10}
        py={8}
        fontSize={{ base: 'md', md: 'xl' }}
        {...props}
      >
        <HStack spacing={3}>
          <Text>{text}</Text>
          <MotionBox
            as='div'
            h={1.5}
            w={1.5}
            rounded='full'
            bg={color}
            animate={isHover ? 'hover' : 'notHover'}
            variants={variants}
            transition={{
              duration: 0.3,
              yoyo: Infinity,
              ease: 'easeOut',
            }}
          />
        </HStack>
      </Link>
    </Box>
  );
};

export default SquareButton;
