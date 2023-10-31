function MyComp() {
  const address = "seoul";
  const country = "korea";
  const phone = "01082672222";
  const age = 44;
  const randomNumber = Math.random();

  // 변수만 쓸수 있는게 아니라 간단한 연산자도 쓸수 있다.
  return (
    <>
      <h1>age는 {age}</h1>
      <h1>address는 {address}</h1>
      <h1>country는 {country}</h1>
      <h1>전화 번호는 {phone}</h1>
      <h1>난수 : {randomNumber}</h1>
      <h1>1~10 : {Math.ceil(randomNumber * 10)}</h1>
    </>
  );
}

function App() {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
