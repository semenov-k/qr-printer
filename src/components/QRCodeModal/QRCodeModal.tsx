import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { QRCodeModalBody } from './QRCodeModalBody';
import { useMemo } from 'react';
import { ViewIcon } from '@chakra-ui/icons';

export type QRCodeModalProps = {
  data: string;
  onClose: () => void;
  isOpen: boolean;
};

const createURL = (data: string) =>
  encodeURI(`${import.meta.env.BASE_URL}#data?d=${data}`);

export const QRCodeModal = ({ data, onClose, isOpen }: QRCodeModalProps) => {
  const dataUrl = useMemo(() => createURL(data), [data]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>QR-код</ModalHeader>
        <ModalCloseButton />
        <QRCodeModalBody content={dataUrl} />
        <ModalFooter display="flex" gap={2}>
          <Button onClick={onClose}>Закрыть</Button>
          <Button
            colorScheme="blue"
            as="a"
            href={dataUrl}
            target="_blank"
            leftIcon={<ViewIcon />}
          >
            Предпросмотр
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
