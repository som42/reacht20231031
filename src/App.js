function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);
  const num3 = num1 == num2;
  let message;

  if (num1 === num2) {
    message = <h1>당첨</h1>;
  } else {
    message = <h1>다시 던져라이</h1>;
  }

  return (
    // 두 수를 출력하고,
    // 두 수가 같으면 당첨!!
    // 두 수가 다르면 다시 던져 보세요
    <>
      <h1>
        첫번째 수 {num1}, 두번째 수 {num2}
      </h1>
      <div>{num3 && <h1>당첨 !!</h1>}</div>
      <div>{num3 || <h1>다시 던져 볼깡?</h1>}</div>

      <hr />
      <h1>{num1 === num2 ? "당첨?" : "다시 던져 보세요"}</h1>

      <hr />
      {message}
    </>
  );
}

export default App;
