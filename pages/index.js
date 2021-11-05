import { Box, Container } from '@chakra-ui/layout';

const HomePage = () => {
  return (
    <Container>
      <Box
        borderRadius="md"
        bg="purple.700"
        p={4}
        mb={6}
        color="white"
        align="center"
      >
        We can build awesome stuff, together.
      </Box>
    </Container>
  );
};

export default HomePage;
