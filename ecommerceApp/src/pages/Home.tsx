import {
  Box,
  Text,
  Flex,
  Image,
  Icon,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import fashion from "../assets/shoes1.jpg";
import laptop from "../assets/laptop.jpg";
import electronics from "../assets/smart-tv.jpg";
import giftcard from "../assets/giftcard.jpg";
import gaming from "../assets/gaming.jpg";
import health from "../assets/health.jpg";
import phones from "../assets/phone2.jpg";
import Caurousel from "../components/caurosel";
import imgLeft from "../assets/img8.jpg";
import imgRight1 from "../assets/pad.jpg";
import imgRight2 from "../assets/phones.jpg";
import imgRight3 from "../assets/pairShoes.jpg";
import { AiFillStar } from "react-icons/ai";
import { Toaster } from "react-hot-toast";
import { addToCart } from "../features/cartSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { fetchProduct } from "../features/productSlice";
import { RootState } from "../store";
const Home = () => {
  interface data {
    _id: string;
    title: string;
    price: number;
    rating: number;
    discountPrice: number;
    brand: string;
    category: string;
    image: string;
    images: [string];
  }
  type cartData = {
    _id: string;
    title: string;
    price: number;
    rating: number;
    discountPrice: number;
    image: string;
    cartQuantity: number;
  };

  const dispatch = useAppDispatch();

  const handleCart = (data: any) => {
    dispatch(addToCart(data));
  };

  const product = useAppSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <Box
      width={"100%"}
      height={"fit-content"}
      paddingBottom={"4rem"}
      paddingX={24}
      bg={"#eee8c5"}
    >
      <Toaster
        position='bottom-left'
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#00111c",
            color: "#ffffff",
          },
        }}
      />
      <Box paddingBottom={"9rem"}>
        <Caurousel />
      </Box>

      <Flex direction={"column"}>
        <Flex
          justify={"flex-end"}
          height={6}
          alignItems={"center"}
          paddingX={12}
        >
          <Text
            color={"#00111c"}
            display={"flex"}
            fontSize={15}
            fontWeight={600}
          >
            View all <Icon as={BsFillCaretRightFill} alignSelf={"center"} />
          </Text>
        </Flex>
        <Flex
          paddingY={2}
          width={"100%"}
          height={"30vh"}
          justifyContent={"center"}
          gap={15}
        >
          <Box
            width={"12%"}
            rounded={8}
            height={"20vh"}
            display={"flex"}
            gap={2}
            flexDirection={"column"}
          >
            <Image
              width={"full"}
              height={"100%"}
              src={fashion}
              rounded={10}
              objectFit={"cover"}
            />
            <Text
              color={"#00111c"}
              textAlign={"center"}
              fontSize={15}
              fontWeight={600}
            >
              Fashion
            </Text>
          </Box>
          <Box
            width={"12%"}
            rounded={8}
            height={"20vh"}
            gap={2}
            display={"flex"}
            flexDirection={"column"}
          >
            <Image
              width={"full"}
              height={"100%"}
              src={electronics}
              rounded={10}
              objectFit={"cover"}
            />
            <Text
              color={"#00111c"}
              textAlign={"center"}
              fontSize={15}
              fontWeight={600}
            >
              {" "}
              Electronics
            </Text>
          </Box>
          <Box
            width={"12%"}
            rounded={8}
            gap={2}
            height={"20vh"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Image
              width={"full"}
              height={"100%"}
              src={phones}
              rounded={10}
              objectFit={"cover"}
            />
            <Text
              color={"#00111c"}
              textAlign={"center"}
              fontSize={15}
              fontWeight={600}
            >
              {" "}
              Phones & Tablets
            </Text>
          </Box>
          <Box
            width={"12%"}
            rounded={8}
            height={"20vh"}
            gap={2}
            display={"flex"}
            flexDirection={"column"}
          >
            <Image
              width={"full"}
              height={"100%"}
              src={laptop}
              rounded={10}
              objectFit={"cover"}
            />
            <Text
              color={"#00111c"}
              textAlign={"center"}
              fontSize={15}
              fontWeight={600}
            >
              Computing
            </Text>
          </Box>
          <Box
            width={"12%"}
            rounded={8}
            height={"20vh"}
            gap={2}
            display={"flex"}
            flexDirection={"column"}
          >
            <Image
              width={"full"}
              height={"100%"}
              src={health}
              rounded={10}
              objectFit={"cover"}
            />
            <Text
              color={"#00111c"}
              textAlign={"center"}
              fontSize={15}
              fontWeight={600}
            >
              Health & Beauty
            </Text>
          </Box>
          <Box
            width={"12%"}
            rounded={8}
            gap={2}
            height={"20vh"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Image
              width={"full"}
              height={"100%"}
              src={gaming}
              rounded={10}
              objectFit={"cover"}
            />
            <Text
              color={"#00111c"}
              textAlign={"center"}
              fontSize={15}
              fontWeight={600}
            >
              Gaming
            </Text>
          </Box>
          <Box
            width={"12%"}
            rounded={8}
            gap={2}
            height={"20vh"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Image
              width={"full"}
              height={"100%"}
              src={giftcard}
              rounded={10}
              objectFit={"cover"}
            />
            <Text
              textAlign={"center"}
              color={"#00111c"}
              fontSize={15}
              fontWeight={600}
            >
              {" "}
              Gift Cards
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex width={"100%"} height={"55vh"} gap={4}>
        <Box width={"50%"} bg={"blue.50"} gap={5} height={"100%"} rounded={10}>
          <Image
            src={imgLeft}
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
            rounded={10}
          />
        </Box>
        <Flex width={"50%"} direction={"column"} gap={4} height={"100%"}>
          <Box width={"100%"} height={"48%"} rounded={10}>
            <Image
              src={imgRight1}
              width={"100%"}
              height={"100%"}
              rounded={10}
              objectPosition={"center"}
              objectFit={"cover"}
            />
            <Box> </Box>
          </Box>
          <Flex width={"100%"} height={"48%"} gap={4}>
            <Box width={"50%"} height={"100%"} rounded={10}>
              <Image
                src={imgRight2}
                width={"100%"}
                height={"100%"}
                rounded={10}
                objectFit={"cover"}
              />
            </Box>
            <Box width={"50%"} height={"100%"} rounded={10}>
              <Image
                src={imgRight3}
                width={"100%"}
                height={"100%"}
                rounded={10}
                objectFit={"cover"}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Box width={"100%"} height={"fit-content"} paddingTop={8}>
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingBottom={6}
        >
          <Text fontSize={22} fontWeight={600} color={"#00111c"}>
            Featured
          </Text>
          <Text
            color={"#00111c"}
            display={"flex"}
            fontSize={15}
            fontWeight={600}
          >
            View all <Icon as={BsFillCaretRightFill} alignSelf={"center"} />
          </Text>
        </Flex>
        {product.isLoading && (
          <Box
            width={"100%"}
            height={"100vh"}
            position={"fixed"}
            top={0}
            left={0}
            display='flex'
            justifyContent={"center"}
            alignItems={"center"}
            right={0}
            bg={"rgba(0,0,0,0.6)"}
          >
            <Text fontSize={26} fontWeight={500} color={"#ffffff"}>
              <Spinner size='xl' color='#ffffff' />
            </Text>
          </Box>
        )}
        <Flex
          width={"100%"}
          gap={"15px"}
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          height={"100%"}
        >
          {/* Product Card */}
          {product.product.map((data) => (
            <Box
              key={data._id}
              width={"19%"}
              height={"55vh"}
              display={"flex"}
              flexDirection={"column"}
              bg={"#f3f3f4"}
              boxShadow={"lg"}
              rounded={10}
            >
              <Image
                src={`http://localhost:4000/${data.image}`}
                width={"100%"}
                height={"53%"}
                loading='lazy'
                objectFit={"cover"}
                rounded={10}
              />
              <Flex
                direction={"column"}
                padding={3}
                width={"100%"}
                justifyContent={"space-between"}
                height={"47%"}
              >
                <Text fontSize={14} fontWeight={600}>
                  {data.title}
                </Text>
                <Flex width={"100%"} gap={2}>
                  <Text fontSize={18} fontWeight={600} alignItems={"center"}>
                    $ {data.price}
                  </Text>
                  <Text
                    alignSelf={"center"}
                    textDecoration={"line-through"}
                    fontSize={15}
                    color={"gray.500"}
                    fontWeight={600}
                  >
                    $ {data.discountPrice}
                  </Text>
                </Flex>

                <Text
                  fontSize={15}
                  fontWeight={600}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Icon as={AiFillStar} fontSize={20} color={"#ff8800"} />
                  {data.rating}
                </Text>
                <Button
                  bg={"#00111c"}
                  onClick={() => handleCart(data)}
                  color={"#f4f4f4"}
                  fontWeight={600}
                  _hover={{ bg: "#00111c" }}
                >
                  Add to cart
                </Button>
              </Flex>
            </Box>
          ))}
          <Text textAlign={"center"}> {product.isError}</Text>
          {/* End of Product Card */}
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
