import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App(props) {
  // 상태를 변경하는 메소드가
  // set... 메소드로 상태 변경할 수 있음.
  // 상태가 같은 지 아닌지 판단해서 re-render 결정함
  // 객체는 참조 값을 사용한다

  const [number, setNumber] = useState(0);
  // 객체
  const [numberObject, setNumberObject] = useState({ number: 0 });

  function handleNumberObjectChange() {
    // 이렇게 사용하면 안된다.
    // numberObject.number = numberObject.number + 1;
    // setNumberObject(numberObject);

    // 복사해서 써야 함
    // 변경된 객체가 들어와야 리액트는 re-render을 함.
    const newNumberObject = { ...numberObject };
    numberObject.number = numberObject.number + 1;
    setNumberObject(newNumberObject);
  }

  return (
    <div>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>number 번경</Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button onClick={handleNumberObjectChange}>number 객체 변경</Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </div>
  );
}

export default App;
