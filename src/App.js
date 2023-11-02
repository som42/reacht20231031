import {
  Box,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
function App() {
  return (
    <>
      <SimpleGrid columns={1} gap={5}>
        <Box>
          <Table variant="striped" colorScheme="red" size={"sm"}>
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Amet.</Th>
                <Th>Perferendis!</Th>
                <Th>Quos!</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Tenetur!</Td>
                <Td>Non.</Td>
                <Td>At!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Laudantium?</Td>
                <Td>Reprehenderit.</Td>
                <Td>Assumenda.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Aut!</Td>
                <Td>Aut?</Td>
                <Td>Earum!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Dicta!</Td>
                <Td>Velit!</Td>
                <Td>Ratione.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Dolore?</Td>
                <Td>Saepe.</Td>
                <Td>Maxime?</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
