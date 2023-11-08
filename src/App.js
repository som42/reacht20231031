import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, Text } from "@chakra-ui/react";
import { color } from "framer-motion";

function MyComp({ color }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(color + " : initial render");
  }, []);

  console.log(color + " : re render");

  return (
    // eslint-disable-next-line no-undef
    <Box borderWidth={"10px"} borderColor={color}>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
    </Box>
  );
}

function App(props) {
  // 부모가 렌더링 될 때 자식도 렌더링 됨.

  const [number, setNumber] = useState(0);
  const [secondToggle, setSecondToggle] = useState(true);
  const [goldToggle, setGoldToggle] = useState(true);

  console.log("부모 re-render");

  return (
    <div>
      <Box>
        <Text>부모</Text>
        <Button onClick={() => setNumber(number + 1)}>증가</Button>
        <Text>{number}</Text>
        <Checkbox
          defaultChecked={true}
          onChange={(e) => setSecondToggle(e.target.checked)}
        ></Checkbox>{" "}
        검은 박스 토글
        <Checkbox
          defaultValue={true}
          onChange={(e) => setGoldToggle(e.target.checked)}
        />
        골드 박스 토글
      </Box>
      <Box mt={5}>
        <Text>자식들</Text>
        <MyComp color={"pink"} />

        {/*골드 박스는 css 안보이게 해서 다시 보여져서 그대로 있다.*/}
        {secondToggle && <MyComp color={"black"} />}
        <Box sx={{ display: goldToggle ? "block" : "none" }}>
          <MyComp color={"gold"} />
        </Box>

        {/*상태를 유지하게 하고싶다.*/}
      </Box>
    </div>
  );
}

export default App;
