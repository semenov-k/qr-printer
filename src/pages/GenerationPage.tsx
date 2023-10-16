import {
  Container,
  VStack,
  Text,
  Textarea,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { QRCodeModal } from '../components/QRCodeModal';
import { useState } from 'react';

export const GenerationPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState('');

  return (
    <Container py={6}>
      <VStack align="stretch" gap="6">
        <VStack gap={2} align="start">
          <label htmlFor="data">
            <Text>Данные:</Text>
          </label>
          <Textarea
            placeholder="Введите данные..."
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </VStack>
        <Button isDisabled={!data.length} colorScheme="teal" onClick={onOpen}>
          Сгенерировать QR
        </Button>
      </VStack>
      <QRCodeModal data={data ?? ''} isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};
