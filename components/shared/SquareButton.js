import React, { useState } from 'react';
import { Text, Box } from '@chakra-ui/react';
import BouncingBall from './BouncingBall';

const SquareButton = ({
  text = '',
  color = 'black.900',
  withBall,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      onMouseOver={() => setIsHover(true)}
      onFocus={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onBlur={() => setIsHover(false)}
      bg='white'
      rounded='none'
      fontWeight='normal'
      fontSize={{ base: 'md', md: 'lg' }}
      px={10}
      py={5}
      color={color}
      cursor='pointer'
      {...props}
    >
      <Text display='inline-block' mr={4}>
        {text}
      </Text>
      {withBall && <BouncingBall isBouncing={isHover} color={color} />}
    </Box>
  );
};

export default SquareButton;
