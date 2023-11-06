import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("hello");

  console.log(text);

  function handleButtonClick() {
    // 상태 값을 변경 할라면 set을 용 해야 한다
    // text 라는 state 값 변경
    setText("greeting");
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>상태 변경</Button>
      <p>{text}</p>
    </div>
  );
}

export default App;
