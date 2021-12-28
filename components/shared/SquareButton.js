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
      y: [0, -23],
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
        href={href}
        rounded='none'
        bg='white'
        color='black'
        fontWeight='normal'
        px={10}
        py={8}
        fontSize={{ base: 'md', md: 'lg' }}
        {...props}
      >
        <Text mr={4}>{text}</Text>
        <MotionBox
          as='span'
          h='6px'
          w='6px'
          verticalAlign='middle'
          rounded='full'
          bg={color}
          animate={isHover ? 'hover' : 'notHover'}
          variants={variants}
          transition={{
            duration: 0.27,
            yoyo: Infinity,
            ease: 'easeOut',
          }}
        />
      </Link>
    </Box>
  );
};

export default SquareButton;
