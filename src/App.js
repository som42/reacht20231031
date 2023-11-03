import React from "react";
import { Box, Button, Center } from "@chakra-ui/react";

function App(props) {
  function handleClick(e) {
    // event bubbling(밖에 있는 이벤트 에게 전달) 막는 메소드
    e.stopPropagation();
    console.log(e.target.className);
  }
  return (
    // 버튼을 클릭하면 Center 클릭한 것과 같은 것일까?
    // onClick 를 셋다 줬기 때문에 Button 누르면 3번이 실행된다
    // 이걸 event bubbling(버블링) 이라고 부른다.
    <Center
      onClick={handleClick}
      className="outerBox"
      w="200px"
      h="200px"
      bg="gold"
    >
      <Center
        onClick={handleClick}
        className="innerBox"
        w="100px"
        h="100px"
        bg="black"
      >
        <Button onClick={handleClick} className="button" colorScheme="yellow">
          Button
        </Button>
      </Center>
    </Center>
  );
}

export default App;
