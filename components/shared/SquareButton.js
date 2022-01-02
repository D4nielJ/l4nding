import React, { useState } from 'react';
import { Text, HStack } from '@chakra-ui/react';
import BouncingBall from './BouncingBall';

const SquareButton = ({
  text = '',
  color = 'black.900',
  withBall,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <HStack
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
      spacing={3}
      color={color}
      cursor='pointer'
      {...props}
    >
      <Text display='inline-block'>{text}</Text>
      {withBall && <BouncingBall isBouncing={isHover} color={color} />}
    </HStack>
  );
};

export default SquareButton;
