//컴포넌트를 다른 파일로 빼고 싶을때?
//src 오른쪽클리해서 new js파일 만들고 컴포넌트이름과 똑같이만들어준다.

import { MyElem } from "./component/MyElem";
import { MyComp } from "./component/MyComp";
import { MyHeader } from "./component/MyHeader";

//export 된 컴포넌트(변수, 함수, 객체)를 import 해서 사용

function App() {
  return (
    <>
      <MyComp />
      <MyElem />
      <MyHeader />
    </>
  );
}

export default App;
