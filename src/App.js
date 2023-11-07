import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  // 3. context 사용 하기 : useContext(Context);
  const message = useContext(MessageContext);
  return <Text>받은 메세지{message}</Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App(props) {
  const [message, setMessage] = useState("");

  // message state를 Ccomp에 전달 하기 목적!!
  // 1. context 만들기 : createContext(); (크리엑트 콘텍스트) 만들때는 컴포넌트 밖에
  // 2. context 에 state 넣기 :
  //          <Context.Provider value={state}></Context.Provider>
  // 3.tree 안에 context 사용 하기

  return (
    <div>
      <Button onClick={() => setMessage("😊😊😊")}>메세지❤️</Button>
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </div>
  );
}
// 1. context 만들기
// 어디서든 받아야 하니깐 변수로 받아야 한다.
// context 이름은 (대문자로 시작하고...Context 끝난다.)
let MessageContext = createContext(null);
// 대부분에 코드에 null을 만든다.

export default App;
