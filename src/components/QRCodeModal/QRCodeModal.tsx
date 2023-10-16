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
import queryString from 'query-string';

export type QRCodeModalProps = {
  data: string;
  header: string;
  footer: string;
  onClose: () => void;
  isOpen: boolean;
};

const createURL = (d: string, h: string, f: string) =>
  queryString.stringifyUrl(
    {
      url: `${import.meta.env.BASE_URL}#data`,
      query: { d, h, f },
    },
    {
      skipEmptyString: true,
    }
  );

export const QRCodeModal = ({
  data,
  onClose,
  isOpen,
  header,
  footer,
}: QRCodeModalProps) => {
  const dataUrl = useMemo(
    () => createURL(data, header, footer),
    [data, header, footer]
  );

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
