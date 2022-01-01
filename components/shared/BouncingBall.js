import React from 'react';
import { MotionBox } from '../utils';

const BouncingBall = ({ isBouncing, color }) => {
  const variants = {
    bouncing: {
      y: [0, -23],
    },
    notBouncing: {
      y: [0, 0],
    },
  };
  return (
    <MotionBox
      display='inline-block'
      h='6px'
      w='6px'
      verticalAlign='middle'
      rounded='full'
      bg={color}
      animate={isBouncing ? 'bouncing' : 'notBouncing'}
      variants={variants}
      transition={{
        duration: 0.27,
        yoyo: Infinity,
        ease: 'easeOut',
      }}
    />
  );
};

export default BouncingBall;
