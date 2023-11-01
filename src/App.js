function App() {
  return (
    <div>
      <MyText
        style={{ color: "blue", border: "5px solid gold" }}
        value={"10"}
        title={"잘 모르겠다요"}
      />
      <MyText
        style={{ color: "res", border: "5px dotted yellow" }}
        value="안녕하세요."
      />
    </div>
  );
}

// 내가 만든 컴포넌트 니깐 메소드 아귀먼트로 객체 형식으로 props 로 들어가고
// props 꺼내서 쓸수 있다.
function MyText(props) {
  return (
    <div style={props.style}>
      <p>
        {props.value}
        {props.title}
      </p>
    </div>
  );
}

export default App;
