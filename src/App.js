import React, { useState } from "react";
import { Button, Input, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const [coffees, setCoffees] = useState([]);
  const [text, setText] = useState("");

  function handleBittonClick() {
    //직전 상태 배열을 조작하면 안되고
    // coffees.push(text);

    // 새 배열을 만들어서 set state 해야 함
    const newCoffees = [...coffees];

    newCoffees.push(text);
    setCoffees(coffees);
  }

  return (
    <div>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleBittonClick}>추가</Button>

      <List>
        {coffees.map((c, index) => (
          <ListItem key={index}>{c}</ListItem>
        ))}
        ;
      </List>
    </div>
  );
}

export default App;
