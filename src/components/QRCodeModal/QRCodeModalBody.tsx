import { ModalBody } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export type QRCodeModalBodyProps = {
  content: string;
};

export const QRCodeModalBody = ({ content }: QRCodeModalBodyProps) => {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    QRCode.toDataURL(content, {
      width: 300,
      margin: 2,
    }).then((url) => {
      setImageUrl(url);
    });

    return () => setImageUrl(undefined);
  }, [content]);

  return (
    <ModalBody display="flex" justifyContent="center">
      <img src={imageUrl} />
    </ModalBody>
  );
};
