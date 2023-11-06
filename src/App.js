import { Box, Button, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([""]);
  const [text, setText] = useState("");
  function handleButtonClick(item) {
    // setItems([...items,text]);
    const newitems = [...items];
    newitems.push(text);
    setItems(newitems);
  }
  function handleRemoveButtonClick(index) {
    // setItems(items.filter((items, i) => i != index));

    const nextItems = [...items];
    // nextitems.splice(index, 1);
    // setItems(nextitems);

    nextItems.splice(index, 1);
    setItems(nextItems);
  }

  return (
    <>
      <Box>
        <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
        <Button onClick={handleButtonClick}>추가</Button>
      </Box>
      <Box>
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item}{" "}
              <Button
                colorScheme="red"
                onClick={() => handleRemoveButtonClick(index)}
              >
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}

export default App;
