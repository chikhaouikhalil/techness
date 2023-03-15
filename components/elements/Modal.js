import { Button, HStack, Modal, Text, VStack } from "native-base";

export const ModalComponent = ({ showModal, setShowModal, children }) => {
  return (
    <Modal
      w="full"
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      size="lg"
    >
      <Modal.Content w="90%">
        <Modal.CloseButton />
        <Modal.Header> </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
