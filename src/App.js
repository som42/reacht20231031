import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  let [number, setNumber] = useState(0);
  function handleClick() {
    // number++ ;
    // 상태를 변경할때는 꼭 리액트한테 상태변경해달라는 명령어를 내려야한다.
    // 상태를 변경할 때 set 메소드를 사용해야 한다.
    setNumber(number + 1);
  }
  return (
    <div>
      <Button onClick={handleClick}>바꾸기</Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;
