import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";
import { currentUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../features/hooks";
import axios from "axios";
import { useState, useEffect } from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import cartSlice from "../features/cartSlice";
const Order = () => {
  const User = useAppSelector(currentUser);
  const cart = useSelector((state: RootState) => state.cart);
  const [userId, setUserId] = useState<string>("");
  const [products, setProducts] = useState<[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [otherPhone, setOtherPhone] = useState<string>("");
  const [error, setError] = useState("");
  const body = {
    userId: User && User._id,
    products: cart.cartItems,
    amount: cart.cartTotalPrice,
    address,
    otherPhone,
  };
  console.log(body);
  const navigate = useNavigate();
  const handleOrder = async (e: any) => {
    try {
      e.preventDefault();

      const res = await axios.post("http://localhost:4000/order/create", body);
      await res.data;
      console.log(res.data);
      navigate("/order/success");
    } catch (err: any) {
      setError(err.response.data);
    }
  };
  return (
    <Box width={"100%"} height={"100vh"} bg={"#eee8c5"}>
      {error && (
        <Box
          bg={"#d90429"}
          color={"#ffffff"}
          width={"100%"}
          height={"8vh"}
          px={4}
          py={3}
        >
          {error}{" "}
        </Box>
      )}
      <Flex width={"100%"} justifyContent={"center"} height={"100%"} p={6}>
        <form action='' className='formBodyShop' onSubmit={handleOrder}>
          <Flex width={"100%"} height={"75vh"} rounded={13}>
            <Flex width={"100%"} height={"100%"} gap={7}>
              <Flex
                width={"60%"}
                height='fit-content'
                rounded={9}
                p={4}
                flexDirection={"column"}
                bg={"#f4f4f4"}
              >
                <Text fontSize={"22px"} fontWeight={600}>
                  Shipping details
                </Text>
                <Flex gap={6}>
                  <FormControl marginBottom={5}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      disabled
                      value={User && User.firstName}
                      type='text'
                      border={"2px #000000 solid!important"}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      disabled
                      value={User && User.lastName}
                      type='text'
                      border={"2px #000000 solid!important"}
                    />
                  </FormControl>
                </Flex>
                <FormControl marginBottom={5}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    disabled
                    value={User && User.email}
                    type='text'
                    border={"2px #000000 solid!important"}
                  />
                </FormControl>
                <Flex gap={4} marginBottom={5}>
                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input
                      type='text'
                      onChange={(e) => setAddress(e.target.value)}
                      border={"2px #000000 solid!important"}
                    />
                  </FormControl>
                  <FormControl width={"60%"}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      onChange={(e) => setOtherPhone(e.target.value)}
                      type='text'
                      border={"2px #000000 solid!important"}
                    />
                  </FormControl>
                </Flex>
                <Button type='submit' bg={"#00111c"} color={"#ffffff"}>
                  Place Order
                </Button>
              </Flex>
              <Flex
                width={"40%"}
                p={4}
                height='100%'
                rounded={9}
                flexDirection='column'
                bg={"#f4f4f4"}
              >
                <Text marginBottom={5} fontSize={"22px"} fontWeight={600}>
                  Your Order
                </Text>
                <Flex
                  flexDirection={"column"}
                  height='100%'
                  justifyContent={"space-between"}
                >
                  <Flex
                    flexDirection={"column"}
                    height={"70%"}
                    gap={5}
                    overflowY={"scroll"}
                    paddingTop={6}
                  >
                    {cart.cartItems?.map((cartItem) => (
                      <Flex
                        key={cartItem._id}
                        width={"100%"}
                        direction={"row"}
                        height={"20vh"}
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
                          <Text fontSize={16} fontWeight={500}>
                            {cartItem.title}
                          </Text>
                          <Text fontSize={15} fontWeight={600}>
                            $ {cartItem.price * cartItem.cartQuantity}
                          </Text>
                        </Box>
                        <Box
                          display={"flex"}
                          justifyContent='center'
                          alignItems={"center"}
                          flexDirection={"column"}
                        >
                          <Text
                            color={"#00111c"}
                            fontSize={13}
                            fontWeight={600}
                          >
                            {cartItem.cartQuantity}
                          </Text>
                        </Box>
                      </Flex>
                    ))}
                  </Flex>
                  {/*  End */}
                </Flex>

                {/* Cart Total */}
                <Flex
                  lineHeight={10}
                  paddingX={34}
                  width={"100%"}
                  justifyContent={"space-between"}
                >
                  <Text color={"#00111c"} fontSize={22} fontWeight={600}>
                    Total
                  </Text>
                  <Text color={"#00111c"} fontSize={22} fontWeight={600}>
                    $ {cart.cartTotalPrice}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default Order;
