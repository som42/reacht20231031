// 우연히 이름이 같을 수도 있다.
// 별칭을 줄수 있다.
import MyBox, { address } from "./component/MyBox";
import MyElem, { address as myAddress } from "/component/MyElem";

// as 로 named export 값을 import할 때 별칭을 줄 수 있음.
function App() {
  return (
    <>
      <h1>{address}</h1>
      <h1>{myAddress}</h1>
      <MyBox />
      <MyElem />
    </>
  );
}

export default App;
