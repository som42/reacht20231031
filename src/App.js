function App() {
  const myStyle = {
    color: "blue",
    backgroundColor: "gold",
    fontsize: "70px",
    textAlign: "center",
  }; //  js 에서 객체 만드는 방법
  return (
    <>
      {/* style 속성은 객체로 주어야 함.*/}
      {/* 두가지 방법으로 할수 있다 클래스로 하던지, 이렇게 바로 넣던지*/}
      <div style={myStyle}> Lorem ipsum.</div>
      <hr />
      <div style={{ color: "red", background: "yellow", fontSize: "30px" }}>
        Lorem ipsum dolor.
      </div>
    </>
  );
}

export default App;
