import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

const routes = createBrowserRouter(
  createRoutesFromElements(
    // 경로에 따라서 다른 컴포넌트가 렌더링 되게 만들었다.
    <>
      <Route path="" element={<Box>home page</Box>} />
      <Route path="/path1" element={<Box>경로1</Box>} />
      <Route path="/path2" element={<Box>경로2</Box>} />
      <Route path="/path3" element={<Box>경로3</Box>} />
      {/*공통된 상위 공로가 있다면 하나로 합칠수 있다.*/}
      <Route path="/main1/path1" element={<Box>경로4</Box>} />
      <Route path="/main1/path2" element={<Box>경로4</Box>} />
      <Route path="/main2">
        <Route path="path1" element={<Box>경로6</Box>} />
        <Route path="path2" element={<Box>경로7</Box>} />
        <Route path="path3">
          {/* 중첩된 경로까지 완료!*/}
          <Route path="sub1" element={<Box>경로8</Box>} />
          <Route path="sub2" element={<Box>경로9</Box>} />
        </Route>
      </Route>
    </>,
  ),
);
function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
