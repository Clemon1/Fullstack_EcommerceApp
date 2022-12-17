import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const SuccessPage = () => {
  return (
    <Box width={"100%"} height={"100vh"} bg={"#eee8c5"}>
      <Flex
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        height={"100%"}
        p={6}
      >
        <Text fontSize={44} fontWeight={600}>
          Ordered Successfully{" "}
        </Text>
        <Link to={"/"}>
          <Button> Back to Home</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default SuccessPage;
