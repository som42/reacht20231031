import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  function handlePlusButtonClick() {
    setNumber(number + 1);
  }
  function handleMinusButtonClick() {
    setNumber(number - 1);
  }
  return (
    <div>
      {/*더하기 빼기 누를 때마다 값 바뀌게 하기 */}
      <input type="number" value={number} />
      <Box>
        <Button onClick={handlePlusButtonClick}>+</Button>
        <Button onClick={handleMinusButtonClick}>-</Button>
      </Box>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>+</Button>
        <Button onClick={() => setNumber(number - 1)}>-</Button>
      </Box>
    </div>
  );
}

export default App;
