import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ onChange, address }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <Box>
      <Input
        value={address}
        onChange={(e) => onChange(e.target.value)};
      />
    </Box>
  );
}

function MyText({ address }) {
  return (
    <Box>
      <Text>{address}</Text>
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("");

  return (
    <div>
      <MyInput address={address} onChange={(text) => setAddress(text)} />
      <MyText address={address} />
    </div>
  );
}

export default App;
