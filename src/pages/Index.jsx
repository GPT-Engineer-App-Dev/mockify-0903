import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box bgImage="url('https://images.unsplash.com/photo-1619229911344-c6c1d9b0d415?w=1200')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" h="100vh" w="100vw">
      <VStack justify="center" align="center" h="full" bgGradient="linear(to-r, blackAlpha.600, transparent)">
        <Heading as="h1" size="4xl" color="white" textAlign="center">
          The Rockers ❤️
        </Heading>

        <Button colorScheme="red" size="lg" rightIcon={<FaTicketAlt />}>
          Get Tour Tickets
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
