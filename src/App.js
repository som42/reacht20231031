import React from "react";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Center>
        <Box w={"480px"}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzh_mIq37BRB2UDOgFMnUB1aiddnfeZ2JFVQ&usqp=CAU" />
        </Box>
        <Box>
          <Image
            boxSize={"100px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzh_mIq37BRB2UDOgFMnUB1aiddnfeZ2JFVQ&usqp=CAU"
          />
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize="200px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzh_mIq37BRB2UDOgFMnUB1aiddnfeZ2JFVQ&usqp=CAU"
          />
        </Box>
        <Box>
          <Image
            src="gibbresh.png"
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Center>
    </div>
  );
}

export default App;
