import React from 'react';
import { Text, Divider } from '@chakra-ui/react';

const Work = () => {
  return (
    <div>
      <Text
        fontWeight='bold'
        fontSize={{ base: '3xl', md: '4xl' }}
        letterSpacing='tighter'
        lineHeight='1'
        textAlign={['center', 'center', 'left']}
        mb={2}
        zIndex={2}
      >
        Work.
      </Text>
      <Divider opacity='1' mb={12} />
    </div>
  );
};

export default Work;
