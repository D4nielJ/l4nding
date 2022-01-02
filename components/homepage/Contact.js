import React from 'react'
import { Box, Text, Divider } from '@chakra-ui/react'

const Contact = () => {
  return (
    <Box as='section' mb={28}>
    <Text
      fontWeight='bold'
      fontSize={{ base: '3xl', md: '4xl' }}
      letterSpacing='tighter'
      lineHeight='1'
      textAlign={['center', 'center', 'left']}
      mb={2}
      zIndex={2}
    >
      Write me.
    </Text>
    <Divider opacity='1' mb={12} />
  </Box>
  )
}

export default Contact
