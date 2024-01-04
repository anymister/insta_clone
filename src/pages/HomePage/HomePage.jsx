import React from 'react';

// Import the react-barcode-scanner package dynamically
const reactBarcodeScanner = await import('react-barcode-scanner');

const HomePage = () => {
  const [scanResult, setScanResult] = useState('');

  const handleScan = async event => {
    const scanData = await reactBarcodeScanner.scan();
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

export default HomePage;
