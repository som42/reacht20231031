import React from "react";
import { Button, Input } from "@chakra-ui/react";

function App(props) {
  // 여기에 변수를 변경했다고 바로 반영되지는 않는다.
  let text = "initial text";
  function handleChange(e) {
    console.log("인풋값이 변경됨");
    // 우리가 동작할때마다 입력된 값이 출력 된다
    console.log(e.target.value);
    text = e.target.value;
    console.log("text", text);
  }

  return (
    <div>
      <p>{text}</p>
      <Input onChange={handleChange} />
      <Input onChange={handleChange} />
    </div>
  );
}

export default App;
