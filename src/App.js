import { Button } from "@chakra-ui/react";

function App() {
  // 함수명 작성 관습
  // handle 이벤트 명
  function handleClick() {
    console.log("second");
  }
  function handleMouseEnter() {
    console.log("thirsd");
  }
  function handleMouseLeave() {
    console.log("4th");
  }
  return (
    <div>
      <Button onClick={() => console.log("first")}>버튼1</Button>
      <Button onClick={handleClick}>버튼2</Button>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        버튼3
      </Button>
    </div>
  );
}

export default App;
