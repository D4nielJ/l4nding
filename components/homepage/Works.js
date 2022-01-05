import React from 'react';
import { Text, Divider, VStack, Box } from '@chakra-ui/react';
import Work from './Work';
import works from '../../lib/projects';

const Works = () => {
  return (
    <Box as='section' id="work" mb={28}>
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
      <VStack spacing={8}>
        {works.map((w, idx) => (
          <Work key={w.id} work={w} last={idx === works.length - 1} />
        ))}
      </VStack>
      {works.length === 0 && <div>No works to show, I&apos;m sorry</div>}
    </Box>
  );
};

export default Works;
