import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function CComp({ message }) {
  return <Text>{message}</Text>;
}

function AComp({ message }) {
  return <CComp message={message} />;
}

function DComp({ onChange, value }) {
  return <Input value={value} onChange={onChange} />;
}

function BComp({ onChange, value }) {
  return <DComp value={value} onChange={onChange} />;
}

function App(props) {
  const [message, setMessage] = useState("a");

  return (
    <div>
      <AComp message={message} />
      <BComp value={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
  );
}

export default App;
