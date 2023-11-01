function App() {
  return (
    <div>
      <MyBox p={"1px"} m={"1px"} color="white" bg="#ffd6d1" text="첫번째" />
      <MyBox p={"1px"} m={"1px"} color="blue" bg="#ffd6d1" text="두번째" />
    </div>
  );
}

function MyBox(props) {
  let { p, m, bg, color, text } = props;
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <p>{text}</p>
    </div>
  );
}
export default App;
