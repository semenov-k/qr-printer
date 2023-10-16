import { AttachmentIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Text, VStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const PrintPage = () => {
  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  return (
    <Container
      py={6}
      sx={{
        '@media print': {
          maxWidth: '100%',
        },
      }}
    >
      <VStack align="stretch" gap={6}>
        <VStack align="stretch" gap={2}>
          <Text
            sx={{
              '@media print': {
                display: 'none',
              },
            }}
          >
            Данные:
          </Text>
          <Box
            p={4}
            bg="gray.200"
            borderRadius={8}
            sx={{
              '@media print': {
                padding: '0',
              },
            }}
          >
            {query.get('d')}
          </Box>
        </VStack>
        <Button
          colorScheme="blue"
          leftIcon={<AttachmentIcon />}
          onClick={() => print()}
          sx={{
            '@media print': {
              display: 'none',
            },
          }}
        >
          Напечатать
        </Button>
      </VStack>
    </Container>
  );
};
