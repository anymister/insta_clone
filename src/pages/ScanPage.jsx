import React, { useState, useEffect } from "react";
import { Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import BarcodeScanner from "react-barcode-scanner";
import Button from "../../components/Button";
import NFCReader from "react-nfc";

const ScanPage = () => {
  const [scanResult, setScanResult] = useState('');

  const handleScan = (event) => {
    const scanData = event.detail.data;
    setScanResult(scanData);
  };

  useEffect(() => {
    const scanner = new NFCReader();
    scanner.on('scan', handleScan);
    scanner.start();

    // Stop the scanner when the component is unmounted
    return () => {
      scanner.stop();
    };
  }, []);

  return (
    <Container maxW='container.lg' py={5}>
      <Flex>
        {!scanResult && (
          <SkeletonCircle size='24' />
        )}

        {scanResult && (
          <Flex flexDirection='column'>
            <Text fontSize={'2xl'}>{scanResult.id}</Text>
            <Text fontSize={'2xl'}>{scanResult.type}</Text>
            <Text fontSize={'2xl'}>{scanResult.payload}</Text>
          </Flex>
        )}

        <Button variant='primary' onClick={() => {
          const scanner = new NFCReader();
          scanner.on('scan', handleScan);
          scanner.start();
        }}>Scan</Button>
      </Flex>
    </Container>
  );
};

export default ScanPage;
