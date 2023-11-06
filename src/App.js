import React from "react";
import { Box, Link, List, ListItem } from "@chakra-ui/react";

function App(props) {
  //배열을 그리는 방법
  // 상태 여서 변경 되어야 한다면?
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라떼", "아메리카노", "카푸치노"];
  const arr4 = [
    {id: 0, name:"라떼"},
    {id:1, name: "에스프레소"},
    ];

  // 자바스크립트에 map 메소드는 새 배열을 리턴해준다.

  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));

  return (
    <div>
      <Box mb={3}>
        <List>{listItems}</List>
      </Box>
      <Box mb={3}>
        <List>
          {arr2.map((e, index) => (
            <ListItem key={index}>{e}</ListItem>
          ))}
        </List>
      </Box>
      <Box mb={3}>
        <List>
          {arr3.map((e, i) => (
            <ListItem key={i}>{e}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;
