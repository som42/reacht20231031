import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      {/*Box 만들기 import 넣어 주기 */}
      <Box bgColor="tomato">Lorem ipsum dolor.</Box>
      <Box bgColor="red">Lorem ipsum dolor.</Box>
      <Box bgColor="blue">Quis, quo, sapiente.</Box>
      <Box bgColor="blue.50">Assumenda, modi, possimus.</Box>
      <Box bgColor="blue.100">Deserunt, hic saepe!</Box>
      <Box bgColor="blue.900">Assumenda, perspiciatis, praesentium.</Box>
      <Box bgColor="gray">Dolorem, ducimus, odit.</Box>
      <Box bgColor="gray.100">Facere, qui voluptatem.</Box>
      <Box bgColor="red.100">Ex, harum odio!</Box>
      <Box bg="yellow.400" color="red.500">
        Ipsa iusto, molestiae.
      </Box>
      <Box bg="pink.200" color="black.200">
        Cumque quae, ratione.
      </Box>
    </>
  );
}

export default App;
