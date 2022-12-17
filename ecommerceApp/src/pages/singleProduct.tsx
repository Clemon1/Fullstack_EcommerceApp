import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Icon,
  TabPanel,
} from "@chakra-ui/react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import shoe1 from "../assets/product3.jpg";
const SingleProduct = () => {
  return (
    <Box width={"100%"} height={"fit-content"} px={40} py={4} bg={"#eee8c5"}>
      <Flex
        width={"100%"}
        height={"100vh"}
        bg={"#eee8c5"}
        gap={4}
        justifyContent={"center"}>
        <Flex direction={"column"} width={"85%"} height={"100%"}>
          <Image
            src={shoe1}
            objectFit={"cover"}
            width={"100%"}
            height={"70%"}
            rounded={12}
          />
        </Flex>
        <Flex width={"100%"} height={"100%"} padding={5} direction={"column"}>
          <Box width={"100%"} height={"25vh"} paddingBottom={2}>
            <Text fontSize={24} fontWeight={500}>
              Product title
            </Text>
            <Text fontSize={19} fontWeight={500}>
              Product rating 4.5
            </Text>
            <Text fontSize={25} fontWeight={600}>
              $300
            </Text>
          </Box>
          <Flex
            width={"100%"}
            alignItems={"center"}
            gap={6}
            height={"25vh"}
            paddingBottom={2}>
            <Text fontSize={19} fontWeight={600}>
              Quantity
            </Text>
            <Flex gap={5} justifyContent={"center"}>
              <Button
                bg={"#00111c"}
                color={"#ffffff"}
                width={"3.5rem"}
                height={"3.5rem"}
                fontSize={25}
                _hover={{ background: "#00111c" }}
                fontWeight={500}
                rounded={"100%"}>
                <Icon as={BiUpArrow} />
              </Button>
              <Text alignSelf={"center"} fontSize={20} fontWeight={500}>
                4
              </Text>
              <Button
                bg={"#00111c"}
                color={"#ffffff"}
                width={"3.5rem"}
                height={"3.5rem"}
                fontSize={25}
                fontWeight={500}
                _hover={{ background: "#00111c" }}
                rounded={"100%"}>
                <Icon as={BiDownArrow} alignSelf={"center"} />
              </Button>
            </Flex>
          </Flex>
          <Flex width={"100%"} height={"25vh"} gap={5} paddingBottom={2}>
            <Button
              bg={"#00111c"}
              color={"#ffffff"}
              _hover={{ background: "#00111c" }}
              px={5}
              py={6}
              rounded={9}>
              Add to Cart
            </Button>
            <Button
              bg={" #ffffff"}
              _hover={{ background: "#ffffff" }}
              color={"#00111c"}
              px={5}
              py={6}
              rounded={9}>
              Add to wishlist
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Box width={"100%"} height={"fit-content"}>
        <Tabs width={"100%"}>
          <TabList width={"100%"}>
            <Tab px={10} fontSize={20} fontWeight={500}>
              Details
            </Tab>
            <Tab px={10} fontSize={20} fontWeight={500}>
              Two
            </Tab>
            <Tab px={10} fontSize={20} fontWeight={500}>
              Three
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti praesentium dolor quas consequuntur iste, unde
                reprehenderit natus culpa aut recusandae sapiente officia
                voluptatem. Commodi aut beatae vitae tempore alias harum?
              </p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default SingleProduct;
