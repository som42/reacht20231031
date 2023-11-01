function App() {
  return (
    <>
      <MyComp value="흥민" address="신촌" />
      <MyComp value="여름" address="부산" />
    </>
  );
}
//구조 분해 할당으로 할때 자바 스크립트 아귀먼트에 적용 시킨 것
// 밑에 두개가 같다
function MyComp(value, address) {
  // let { value, address } = props;
  return (
    <div>
      <h1>
        {value}는 {address}에 산다
      </h1>
    </div>
  );
}
export default App;
