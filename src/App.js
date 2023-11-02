import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"50px"}
        bg={"gray.300"}
        gap={3}
        align={"center"}
        justify={"center"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"red"}>Itaque!</Box>
        <Box bg={"blue"}>Rerum!</Box>
        <Box bg={"green"}>Minus.</Box>
        <Box bg={"orange"}>Molestiae.</Box>
      </Flex>
    </>
  );
}

export default App;
