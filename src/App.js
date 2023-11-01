import Box, { color } from "./component/Box";
import Container, { color as co } from "./component/Container";

function App() {
  return (
    <div>
      <Box style={{ color: color }} />
      <Container style={{ color: co }} />
    </div>
  );
}

export default App;
