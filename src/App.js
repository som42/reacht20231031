function App() {
  return (
    <div>
      <MyElem name="흥민" age={44} team="토트넘" />
      <MyElem name="강인" age={33} team="파리" />
    </div>
  );
}

function MyElem({ name, age, team }) {
  return (
    <div>
      <h1>
        {name}에 나이는 {age}이고 {team}에 산다.
      </h1>
    </div>
  );
}

export default App;
