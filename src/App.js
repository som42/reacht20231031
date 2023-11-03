import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

function MyBox({ color, bg, children }) {
  return (
    <>
      <SimpleGrid gap={3} columns={{ base: 1, md: 3, xl: 6 }}>
        <Card color={color} bg={bg}>
          <CardHeader>
            <Heading sizw="md">편지</Heading>
          </CardHeader>
          <CardBody>{children}</CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
}
function App(props) {
  return (
    <>
      <MyBox color="black" bg="pink">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
        exercitationem explicabo hic illo inventore nihil quae quaerat quam!
        Cumque dicta eligendi facilis fugiat illo iure laborum maxime minima
        quae ut.
      </MyBox>
      <MyBox color="black" bg="gray">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
        exercitationem explicabo hic illo inventore nihil quae quaerat quam!
        Cumque dicta eligendi facilis fugiat illo iure laborum maxime minima
        quae ut.
      </MyBox>
    </>
  );
}

export default App;
