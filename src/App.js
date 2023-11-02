import React from "react";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Center>
        <Box w={"480px"}>
          <FormControl display={"flex"} alignItems={"center"}>
            <FormLabel mb={0}>알림 받을 꼬얌?</FormLabel>
            <Switch size={"lg"} colorScheme="pink" />
          </FormControl>
        </Box>
      </Center>
    </div>
  );
}

export default App;
