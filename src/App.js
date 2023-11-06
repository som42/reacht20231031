import React, { useState } from "react";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";

function App(props) {
  const [foods, setFoods] = useState([]);

  function handleButtonClick(food) {
    setFoods([...foods, food]);
  }

  function handleRemoveButtonClick(index) {
    // console.log(index + "번 째 아이템 지우기");
    // 추가한거 지우는 방법

    // const nextFoods = [...foods];
    // nextFoods.splice(index, 1);

    // const nextFoods = foods.filter((item, i) => i != index);
    // setFoods(nextFoods);

    setFoods(foods.filter((item, i) => i != index));
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("코코아")}>코아</Button>
      <Button onClick={() => handleButtonClick("율무차")}>율아</Button>
      <Button onClick={() => handleButtonClick("밀크티")}>밀아</Button>
      <Box>
        <UnorderedList>
          {foods.map((item, index) => (
            <ListItem key={index}>
              {item}{" "}
              <Button onClick={() => handleRemoveButtonClick(index)}>
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
