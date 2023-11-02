import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Aspernatur, doloribus!
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellw"}>
        Consequuntur, perspiciatis.
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.600"}>
        Incidunt, vero.
      </Box>
      <Box borderY={"10px dotted"} borderColor={"red.300"}>
        Assumenda, sed.
      </Box>
      <Box border={"2px solid pink"}>Accusantium, ipsa.</Box>
      <Box border={"5px solid blue"} borderRadius={"30px"}>
        Ea, tenetur!
      </Box>
      <Box border={"5px solid yellow"} borderRadius={"20%"}>
        Praesentium, veniam.
      </Box>
      <Box border={"5px solid black"} borderRadius={1}>
        Sunt, velit!
      </Box>
      <Box border={"2px solid #ffd6d1"} borderRadius={50}>
        Error, qui.
      </Box>
      <Box border={"5px solid blue"} borderTopRightRadius={10}>
        Architecto, nemo!
      </Box>
      <Box border={"5px solid green"} borderBottomRightRadius={10}>
        Cum, saepe.
      </Box>
      <Box border={"5px solid purple"} borderTopRightRadius={10}>
        Facilis, incidunt!
      </Box>
      <Box border={"5px solid red"} borderBottomLeftRadius={10}>
        Quo, repudiandae!
      </Box>
      <Box border={"5px solid skyblue"} borderBottomEndRadius={10}>
        Illo, nemo!
      </Box>
      <Box shadow={"10px 5px 5px red"}>Facere, optio.</Box>
      <Box shadow="lg">Dignissimos, doloribus.</Box>
      <Box bg={"blue.300"} m="10px">
        Dolorum, iusto.
      </Box>
      <Box bg={"yellow.600"} ml={"20px"}>
        Debitis, laboriosam?
      </Box>
      <Box bg={"facebook.500"} ma={"70px"}>
        Culpa, nam!
      </Box>
      <Box bg="red.300" my="50px">
        Lorem ipsum.
      </Box>
      <Box bg="red.600" m="10">
        Lorem ipsum dolor.
      </Box>
      <Box bg="blue.300" m="20">
        Lorem ipsum dolor.
      </Box>
      <Box bg="gold" m="30">
        Lorem ipsum dolor.
      </Box>
      <Box bg="yellow.900" m="40">
        Lorem ipsum dolor.
      </Box>
      <Box bg="gray.400" m="50">
        Lorem ipsum dolor.
      </Box>
      <Box bg="red.400" p={1}>
        {" "}
        Lorem ipsum dolor.
      </Box>
      <Box bg="blue.300" p={2}>
        {" "}
        Lorem ipsum dolor.
      </Box>
      <Box bg="purple" p={3}>
        {" "}
        Lorem ipsum dolor.
      </Box>
      <Box bg="gold" p={4}>
        {" "}
        Lorem ipsum dolor.
      </Box>
      <Box bg="tomato" p={5}>
        {" "}
        Lorem ipsum dolor.
      </Box>
      <Box bg="red.600" p={6}>
        {" "}
        Lorem ipsum dolor.
      </Box>
      <Box w="100%" h="100px" bgGradient="linear(to-r, green.200, pink.500)">
        {" "}
        Lorem ipsum dolor.
      </Box>
      <Box w="100%" h="100px" bgGradient="linear(to-l, #7928CA, #FF0080)">
        {" "}
        Lorem ipsum dolor.
      </Box>
      <Box
        w="100%"
        h="100px"
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
      >
        {" "}
        Lorem ipsum dolor.
      </Box>
      <Box bg="skyblue"> Lorem ipsum dolor.</Box>
    </>
  );
}

export default App;
