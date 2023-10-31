function App() {
  const number = Math.ceil(Math.random() * 100);
  const isLarge = number > 50;
  const isSmall = number <= 50;

  return (
    <>
      <h1>난수 : {number}</h1>
      {/*넘버거 50 크면 큰수, 작으면 작은수/*/}
      <h1>{number > 50 ? "큰수" : "작은 수"}</h1>
      <div>{number > 50 ? <BigImage /> : <SmallImage />}</div>
      <div>{isLarge && <h1>큰 수다 </h1>}</div>
      <div>{isLarge || <h1>작은 수다!!</h1>}</div>
    </>
  );
}

function BigImage() {
  return <h1>큰 이미지</h1>;
}
function SmallImage() {
  return <h3>작은 이미지</h3>;
}

export default App;
