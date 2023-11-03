function App() {
  function handleClick(e) {
    e.preventDefault(); // 월래 해야 하는 일 멈추고
    // 누르면 네이버로 가게 하기.
    window.location.href = "https://www.naver.com";
  }
  return (
    <>
      <a href="http://www.daum.net" onClick={handleClick}>
        다음으로 이동
      </a>
    </>
  );
}

export default App;
