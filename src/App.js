import React from "react";
import { Button } from "@chakra-ui/react";

// 프랍으로 받은게 함수면 안에서 사용 할수 있다.
function MyComp({ to, someProp }) {
  someProp();

  return (
    <>
      <div>
        <a href={to[0]}>link!!</a>;
      </div>
      <div>
        {/*함수를 넘겨서 이벤트 프로퍼티에 쓸수있다.*/}
        <Button onClick={someProp}>버튼</Button>
      </div>
    </>
  );
}

function App(props) {
  function func1() {
    console.log("func1 실행됨");
  }
  return (
    <div>
      {/*뭐 든지 들어 갈수 있으니깐 함수도 들어갈수 있다.*/}
      <MyComp to={["https://www.naver.com"]} someProp={func1}></MyComp>
    </div>
  );
}

export default App;
