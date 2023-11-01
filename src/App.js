function App() {
  const myStyle = {};
  return (
    <>
      <h1
        className={"note"}
        style={{ backgroundColor: "blue", color: "white" }}
        title={"제목 요소 "}
      >
        Lorem.
      </h1>
      {/*빌트인 컴포넌트*/}
      <p title={"문단 요소"}>Lorem ipsum dolor.</p>
      {/*리액트 에서는 밑에 애를 프로퍼티라고 한다.*/}
      {/*우리가 만든 컴포넌트에 할일은 함수에 적어 주면된다.*/}
      <MyComp title="내 컴포넌트" name="흥민" />
      <MyComp title="I am 컴포넌트에요" name="강인" />
    </>
  );
}
// 위에 작성된 프로퍼티는 함수 아귀먼트로 넘어간다.
// 함수 인자로 사용한 곳에서 넘긴 프로퍼티(property)들이 담김
//  형태로 담기게 된다.
// 예) title= "내 컴포넌트" => {title: "내 컴포넌트"}
// 예) title= "내 컴포넌트" name="흥민" => {title: "내 컴포넌트" , name: "흥민"}
function MyComp(props) {
  console.log("MyComp가 받은 property", props);
  return (
    <div>
      <h1 title={props.title}>hello{props.name}</h1>
    </div>
  );
}
export default App;
