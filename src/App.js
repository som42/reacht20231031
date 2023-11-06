import { Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  console.log(number);

  function handleButtonClick() {
    setNumber(number + 1);
  }

  function 감소버튼() {
    setNumber(number - 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <Button onClick={handleButtonClick}>증가</Button>
      <Button onClick={감소버튼}>마이너스</Button>
    </>
  );
}

export default App;
