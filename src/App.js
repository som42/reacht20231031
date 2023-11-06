import React, { useState } from "react";
import { Box, Button, List, ListItem } from "@chakra-ui/react";

function App() {
  const [items, setItems] = useState([]);

  function handButtonClick(item) {
    console.log(item);
    // items이 상태를 item 추가하도록 변경
    // const newitems = [...items];
    // newitems.push(item);

    // const newitems = [...items, item];
    // setItems(newitems);

    setItems([...items, item]);
  }

  return (
    <>
      <Button onClick={() => handButtonClick("커피")}>커피</Button>
      <Button onClick={() => handButtonClick("케잌")}>케잌</Button>
      <Button onClick={() => handButtonClick("아이스크림")}>아이스크림</Button>
      <Button onClick={() => handButtonClick("크로와상")}>크로와상</Button>
      <Button onClick={() => handButtonClick("단팥빵")}>단팥빵</Button>

      <Box>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
          ;
        </List>
      </Box>
    </>
  );
}

export default App;
