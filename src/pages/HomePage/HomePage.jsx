import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  useEffect(() => {
    // Vérification de la prise en charge de l'API NFC
    if ('NDEFReader' in window) {
      const reader = new NDEFReader();
      reader.scan().then(() => {
        reader.addEventListener('reading', event => {
          const message = event.message;
          // Faites quelque chose avec les données du tag NFC
          console.log(message);
        });
      }).catch(error => {
        console.error('Error reading NFC', error);
      });
    } else {
      console.error('Web NFC not supported');
    }
  }, []);

	return (
		<Container maxW={"container.lg"}>
			<Flex gap={20}>
				<Box flex={2} py={10}>
					<FeedPosts />
				</Box>
				<Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
					<SuggestedUsers />
				</Box>
			</Flex>
		</Container>
	);
};

export default HomePage;
