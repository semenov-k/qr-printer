import { AttachmentIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Text, VStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import queryString from 'query-string';

export const PrintPage = () => {
  const { query } = useMemo(
    () => queryString.parseUrl(window.location.href),
    []
  );

  return (
    <>
      <Container
        py={6}
        sx={{
          '@media print': {
            display: 'none',
          },
        }}
      >
        <VStack align="stretch" gap={6}>
          {query.h && (
            <VStack align="stretch" gap={2}>
              <Text>Верх:</Text>
              <Box p={4} bg="gray.200" borderRadius={8}>
                {query.h}
              </Box>
            </VStack>
          )}
          {query.d && (
            <VStack align="stretch" gap={2}>
              <Text>Данные:</Text>
              <Box p={4} bg="gray.200" borderRadius={8}>
                {query.d}
              </Box>
            </VStack>
          )}
          {query.f && (
            <VStack align="stretch" gap={2}>
              <Text>Низ:</Text>
              <Box p={4} bg="gray.200" borderRadius={8}>
                {query.f}
              </Box>
            </VStack>
          )}
          <Button
            colorScheme="blue"
            leftIcon={<AttachmentIcon />}
            onClick={() => print()}
          >
            Напечатать
          </Button>
        </VStack>
      </Container>
      <Box
        h="100vh"
        w="100vw"
        display="none"
        alignItems="center"
        justifyContent="center"
        p="2mm"
        sx={{
          '@media print': {
            display: 'flex',
          },
        }}
      >
        <Box
          position="relative"
          height="58mm"
          width="76mm"
          border="1px solid"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="stretch"
        >
          {query.h && (
            <Text
              position="absolute"
              textAlign="center"
              width="100%"
              top="2mm"
              left="2mm"
            >
              {query.h}
            </Text>
          )}
          {query.d && (
            <Text textAlign="center" fontSize="3xl">
              {query.d}
            </Text>
          )}
          {query.f && (
            <Text position="absolute" bottom="2mm" left="2mm">
              {query.f}
            </Text>
          )}
        </Box>
      </Box>
    </>
  );
};
