import MyContainer, { person, team } from "./component/MyContainer";

function App() {
  return (
    <div>
      <MyContainer />
      <h1>{person.name}</h1>
      <h1>{person.address}</h1>
      <h1>{team.title}</h1>
      <h1>{team.score}</h1>
    </div>
  );
}

export default App;
