import React from "react";

function App(props) {
  function handleClick(e) {
    // 브라우저가 해 야하는 기본 기능을 방지, 취소 하고 싶을때
    e.preventDefault();
    console.log("다른 일을 시킴");
  }
  function handleSubmit(e) {
    // 기본 기능 취소
    e.preventDefault();
    console.log("다른 일을 시킴");
  }

  return (
    <div>
      <a href="https://www.naver.com" onClick={handleClick}>
        네이버
      </a>
      <div>
        <form action="https://search.daum.com/search" onSubmit={handleSubmit}>
          <input type="text" name="q" />
          <button>검색</button>
        </form>
      </div>
    </div>
  );
}

export default App;
