import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  function handleClickButton(number) {
    console.log(number + "번째 버튼 클릭됨");
  }

  // 같은 일을 하는 함수들을 number줘서  묶어서 쓸수있다.
  // return 에서는 화살표 함수로 해줘야 한다.
  function handleButtonClick(n12) {
    console.log(n12 + "번째 버튼 클릭됨");
  }

  function abc() {
    handleClickButton(1);
  }
  return (
    <div>
      <Button onClick={() => handleClickButton(1)}>첫번째 버튼</Button>
      <Button onClick={abc}>첫번째 버튼</Button>
      <Button onClick={() => handleClickButton(2)}>두번째 버튼</Button>
      <Button onClick={() => handleButtonClick(3)}>세번째 버튼</Button>
      <Button onClick={() => handleButtonClick(4)}>넷번째 버튼</Button>
    </div>
  );
}

export default App;
