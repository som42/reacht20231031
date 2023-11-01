import {
  MyElem,
  MyNavBar,
  MyContent,
  country,
  text,
  value,
} from "./component/MyElem";

function App() {
  // country, text, value, MyElem, MyNavBar, MyContent
  //를 하나의 파일 (component/MyElem.js)에 작성하고 export
  return (
    <div>
      <p>{country}</p>
      <p>{text}</p>
      <p>{value}</p>
      <MyElem />
      <MyNavBar />
      <MyContent />
    </div>
  );
}

export default App;
