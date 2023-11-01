import { findAllByDisplayValue } from "@testing-library/react";

function App() {
  return (
    <div>
      <MyComp m="30px" p="10px" color="gold" bg="black" text="hollo reaxt" />
      <MyComp m="30px" p="10px" text="hollo reaxt" />
      <MyComp p="30px" bg="black" text="hollo reaxt" />
      <MyComp p="10px" color="gold" />
    </div>
  );
}

function MyComp({
  m = "30px",
  p = "10px",
  color = "blue",
  bg = "pink",
  text = "이거 맞아유?",
}) {
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <p>{text}</p>
    </div>
  );
}

export default App;
