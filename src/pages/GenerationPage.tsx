import {
  Container,
  VStack,
  Text,
  Textarea,
  Input,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { QRCodeModal } from '../components/QRCodeModal';
import { useState } from 'react';

export const GenerationPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState('');
  const [header, setHeader] = useState('');
  const [footer, setFooter] = useState('');

  return (
    <Container py={6}>
      <VStack align="stretch" gap="6">
        <VStack gap={2} align="start">
          <label htmlFor="top">
            <Text>Верх:</Text>
          </label>
          <Input
            placeholder="Верхняя строка..."
            id="top"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
        </VStack>
        <VStack gap={2} align="start">
          <label htmlFor="data">
            <Text>Данные:</Text>
          </label>
          <Textarea
            placeholder="Основные данные..."
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </VStack>
        <VStack gap={2} align="start">
          <label htmlFor="bottom">
            <Text>Низ:</Text>
          </label>
          <Input
            placeholder="Нижняя строка..."
            id="bottom"
            value={footer}
            onChange={(e) => setFooter(e.target.value)}
          />
        </VStack>
        <Button
          isDisabled={!data.length && !header.length && !footer.length}
          colorScheme="teal"
          onClick={onOpen}
        >
          Сгенерировать QR
        </Button>
      </VStack>
      <QRCodeModal
        data={data ?? ''}
        header={header ?? ''}
        footer={footer ?? ''}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};
