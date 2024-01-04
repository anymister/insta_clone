import { Box, Container, Flex, Button } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";
import ScanPage from "./ScanPage/ScanPage.jsx";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
          <SuggestedUsers />
        </Box>
        <Button
          variant="primary"
          as="button"
          onClick={() => {
            // Navigate to the ScanPage
            alert("Navigating to ScanPage");
          }}
        >
          Scan
        </Button>
      </Flex>
    </Container>
  );
};

export default HomePage;
