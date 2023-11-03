import { Button } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    // 버튼 안에 링크 넣어 보기
    <>
      <Button as="a" href={to} colorScheme="pink">
        {children}
      </Button>
    </>
  );
}

function App() {
  return (
    <>
      <MyLink to="https://www.naver.com">naver 😌</MyLink>
      <MyLink to="https://www.daum.net">daum ❤️</MyLink>
    </>
  );
}

export default App;
