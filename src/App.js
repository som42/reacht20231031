import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  // 브라우저는  이벤트 핸들러 메소드
  //  event 객체를 매개 값으로 넣어준다.
  function handeClick(event) {
    // console.log(event);
    console.log(event.target);
    // console.log(event.target.className); // 이벤트하는 클래스이름을보고싶다
    // console.log(event.target.type); // 타입을 보고싶다
  }
  return (
    // 이벤트 프로퍼티는 on 머머로 늘 시작된다.
    // 이벤트 퍼티가 함수로 실행 될 때 파라미터 하나를 넣어준다(우리 눈에 보이지않는다)
    // 받겠다는 파라미터를 명시 하면 받을수 있다. 보통 e 라고 쓴다.
    <div>
      <Button colorScheme="red" onClick={handeClick}>
        button1
      </Button>
      <Button colorScheme="pink" onClick={handeClick}>
        button2
      </Button>
    </div>
  );
}

export default App;
