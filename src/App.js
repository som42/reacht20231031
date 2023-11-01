function App() {
  return (
    <>
      <MyComp name="흥민" address="신촌" age={33} city="서울" />
      <MyComp address="강남" age={22} city="부산" />
      <MyComp address="런던" city="영국" />
      <MyComp name="희찬" age={66} city="파리" address="프랑스" />
    </>
  );
}

// 구조 분해 할당할때 기본값을 줄 수 있다.
function MyComp({ name = "anonymous", address, city, age = 100 }) {
  // let { value, address } = props;
  return (
    <div>
      <p>
        {name}은 {age}세 이고 {address}, {city}에 산다.
      </p>
    </div>
  );
}
export default App;
