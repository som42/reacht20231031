import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function ChildComp({ onClick }) {
  return <Button onClick={onClick}>클릭❤️</Button>;
}

function SomeComp({ onClick }) {
  // 건네 주는 일만 하겠다.
  return <ChildComp onClick={onClick} />;
}

function OtherChildComp({ message }) {
  return <Text>{message}</Text>;
}

// message 구조분해 할당해서, otherCilcd에게 다시 줌
function OtherComp({ message }) {
  return <OtherChildComp message={message} />;
}

function App(props) {
  const [message, setMessage] = useState("어렵다이");

  return (
    <div>
      <SomeComp onClick={() => setMessage("다른 메세지")} />
      <OtherComp message={message} />
    </div>
  );
}

export default App;
