import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>매매</Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="scale"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>과천 자이</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            지금 구매하실려는 아파트가 과천 자이가 맞습니까? 지금 3년 동안
            비교한 시세보다 30% 떨어진 가격이지만 앞으로 어떡해 될지는 모릅니다.
            이 아파트 실 거래와, 전세를 비교했을때 매매사기, 전세사기는
            없었습니다. 안전한 거래로 연결해 드릴가요?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              ❤️
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
