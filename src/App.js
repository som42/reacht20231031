// default export 중가로 없이 하나만 쓰면 된다.
import MyBox from "./component/MyBox";
import age, { MyElem, city } from "./component/MyElem";
import Myvv, { person, country } from "./component/MyBox";

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{age}</h1>
      <Myvv />
      <h1>
        {person.age}, {person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}

export default App;
