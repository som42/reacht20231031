import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon, TriangleDownIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <Flex
      px={{ base: "0px", md: "70px", lg: "120px" }}
      justify="space-between"
      py="8px"
      my="10px"
      bg="red.200"
    >
      <Flex gap="7px" align={"center"}>
        {/*글씨 굵게 as=b*/}
        <Text fontSize="3xl" as="b">
          Navbar
        </Text>
        <Button variant={"ghost"}>Home</Button>
        <Button variant={"ghost"}>Link</Button>

        <Menu>
          <MenuButton
            variant="ghost"
            as={Button}
            rightIcon={<TriangleDownIcon />}
          >
            Dropdown
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Button variant={"ghost"} isDisabled={true}>
          Disabled
        </Button>
      </Flex>
      <Flex gap="7px" alian={"center"}>
        <input size="sm" bg="white" />
        <Button size="sm" variant="outline" colorScheme="blackAlpha">
          Search
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
