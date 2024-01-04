import React, { useState } from 'react';
import { Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react';
import BarcodeScanner from 'react-barcode-scanner';
import Button from '../../components/Button';

const ScanPage = () => {
  const [scanResult, setScanResult] = useState('');

  const handleScan = (event) => {
    const scanData = event.detail.data;
    setScanResult(scanData);
  };

  return (
    <Container maxW='container.lg' py={5}>
      <Flex>
        {!scanResult && (
          <SkeletonCircle size='24' />
        )}

        {scanResult && (
          <Flex flexDirection='column'>
            <Text fontSize={'2xl'}>{scanResult}</Text>
          </Flex>
        )}

        <Button variant='primary' onClick={() => {
          const scanner = new BarcodeScanner({
            render: true,
            // Set the desired options for your barcode scanner
          });
          scanner.on('scan', handleScan);
          scanner.start();
        }}>Scan</Button>
      </Flex>
    </Container>
  );
};

export default ScanPage;
