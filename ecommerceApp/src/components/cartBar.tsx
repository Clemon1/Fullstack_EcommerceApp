import { Box, Text, Flex, Button, VStack, Icon, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiTrash, BiTrashAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  clearCart,
  removeCartItems,
  getTotals,
} from "../features/cartSlice";
import { RootState } from "../store";
import { Link } from "react-router-dom";

type cartData = {
  _id: string;
  title: string;
  price: number;
  rating: number;
  discountPrice: number;
  image: string;
  cartQuantity: number;
};

interface Props {
  show: boolean;
  handleCart: () => void;
}

const Cartbar = ({ show, handleCart }: Props) => {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);
  return (
    <VStack
      width={"27%"}
      height={"100vh"}
      bg={"#eae2b7"}
      direction={"column"}
      spacing={10}
      zIndex={"100000 !important"}
      position='fixed'
      transform={show ? "translateX(378px)" : "translateX(0px)"}
      transition={".4s all"}
      paddingX={4}
      paddingY={4}
      right={0}
      top={0}
    >
      <Flex
        direction={"column"}
        width={"100%"}
        height={"100%"}
        justify={"flex-start"}
        gap={4}
      >
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={55}
        >
          <Button
            type='submit'
            onClick={handleCart}
            justifyContent={"flex-start"}
            paddingX={4}
            bg={"#ffffff"}
            paddingY={6}
            rounded={10}
            fontWeight={600}
            fontSize={23}
          >
            <Icon as={AiOutlineClose} />
          </Button>
          <Text
            fontWeight={600}
            fontSize={17}
            textAlign={"center"}
            alignItems={"center"}
          >
            My Cart
          </Text>
          {cart.cartItems.length === 0 ? (
            <Button
              fontSize={15}
              bg={"gray.500"}
              disabled
              rounded={14}
              _hover={{ bg: "gray.500" }}
              color={"#ffffff"}
            >
              <Icon as={BiTrash} fontSize={18} />
              Clear Cart
            </Button>
          ) : (
            <Button
              onClick={() => dispatch(clearCart())}
              fontSize={15}
              bg={"#d90429"}
              rounded={14}
              color={"#ffffff"}
            >
              <Icon as={BiTrash} fontSize={18} />
              Clear Cart
            </Button>
          )}
        </Flex>

        {/*  Cart items */}
        {cart.cartItems.length === 0 ? (
          <Flex width={"100%"} direction={"column"} justifyContent={"center"}>
            <Text textAlign={"center"}>No item in your cart</Text>
            <Button
              paddingX={8}
              paddingY={6}
              rounded={14}
              bg={"#00111c"}
              color={"#fdfdfd"}
              transition={".5s all"}
              _hover={{ bg: "#fdfdfd", color: "#00111c" }}
              fontSize={16}
            >
              Start Shopping
            </Button>
          </Flex>
        ) : (
          <Flex
            direction={"column"}
            width={"100%"}
            height={"90%"}
            justify={"flex-end"}
            gap={4}
          >
            <Flex
              className='scrollBody'
              width={"100%"}
              height={"150vh"}
              direction={"column"}
              alignItems={"center"}
              gap={3}
              overflowY={"scroll"}
            >
              {cart.cartItems?.map((cartItem) => (
                <Flex
                  key={cartItem._id}
                  width={"100%"}
                  direction={"row"}
                  height={"17vh"}
                  gap={4}
                  padding={2}
                  boxShadow={"lg"}
                  rounded={12}
                  bg={"#f4f4f4"}
                >
                  <Image
                    src={`http://localhost:4000/${cartItem.image}`}
                    objectFit={"cover"}
                    width={"30%"}
                    rounded={10}
                    alt='cartImage'
                  />
                  <Box
                    width={"100%"}
                    display={"flex"}
                    paddingY={2}
                    flexDirection={"column"}
                  >
                    <Text fontSize={13} fontWeight={500}>
                      {cartItem.title.substring(0, 17)}...
                    </Text>
                    <Text fontSize={15} fontWeight={600}>
                      $ {cartItem.price * cartItem.cartQuantity}
                    </Text>
                    <Button
                      onClick={() => dispatch(removeCartItems(cartItem._id))}
                      width={"31%"}
                      fontSize={23}
                      bg={"#e9f1f7"}
                      marginRight={75}
                    >
                      <Icon as={BiTrashAlt} color={"red.700"} />
                    </Button>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent='center'
                    alignItems={"center"}
                    flexDirection={"column"}
                  >
                    <Button
                      bg={"#00111c"}
                      color={"#f3f3f4"}
                      _hover={{ bg: "#00111c" }}
                      onClick={() => dispatch(addToCart(cartItem))}
                      padding={1}
                    >
                      +
                    </Button>
                    <Text color={"#00111c"} fontSize={13} fontWeight={600}>
                      {cartItem.cartQuantity}
                    </Text>
                    {cartItem.cartQuantity <= 1 ? (
                      <Button
                        bg={"gray.800"}
                        color={"#f3f3f4"}
                        disabled
                        _hover={{ bg: "#00111c" }}
                        padding={1}
                      >
                        -
                      </Button>
                    ) : (
                      <Button
                        bg={"#00111c"}
                        color={"#f3f3f4"}
                        onClick={() => dispatch(decreaseQuantity(cartItem))}
                        _hover={{ bg: "#00111c" }}
                        padding={1}
                      >
                        -
                      </Button>
                    )}
                  </Box>
                </Flex>
              ))}
            </Flex>

            {/*   Total  CheckOut */}
            <Flex
              width={"100%"}
              bg={"#f4f4f4"}
              boxShadow={"sm"}
              height={"70%"}
              padding={6}
              direction={"column"}
              rounded={10}
              alignItems={"center"}
            >
              <Flex width={"100%"} justifyContent={"space-between"}>
                <Text fontWeight={400} color={"#495057"}>
                  Sub Total
                </Text>
                <Text fontWeight={400} color={"#495057"}>
                  $ {cart.cartTotalPrice}
                </Text>
              </Flex>

              <Flex
                lineHeight={10}
                paddingX={2}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Text color={"#00111c"} fontWeight={600}>
                  Total
                </Text>
                <Text color={"#00111c"} fontWeight={600}>
                  $ {cart.cartTotalPrice}
                </Text>
              </Flex>
              <Link to={"/order"}>
                <Button
                  width={"100%"}
                  bg={"#00111c"}
                  fontWeight={500}
                  onClick={handleCart}
                  rounded={12}
                  color={"#fdfdfd"}
                  _hover={{ bg: "#00111c !important" }}
                >
                  Checkout
                </Button>
              </Link>
            </Flex>
          </Flex>
        )}
      </Flex>
    </VStack>
  );
};

export default Cartbar;
