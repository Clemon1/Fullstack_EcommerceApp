import { Box, HStack, Input, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegStarHalf } from "react-icons/fa";
import { useState } from "react";
import Cartbar from "./cartBar";
import Overlay from "./overlay";
import { useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../features/hooks";
import { Link } from "react-router-dom";
import { logOut } from "../features/authSlice";
import { RootState } from "../store";
import { currentUser } from "../features/authSlice";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handleCart = () => {
    setOpen(!isOpen);
  };
  const { cartTotalQuantity } = useAppSelector(
    (state: RootState) => state.cart,
  );

  const User = useAppSelector(currentUser);
  return (
    <HStack
      width={"100%"}
      justify='space-between'
      height={"15vh"}
      paddingY={4}
      zIndex='0 !important'
      spacing={20}
      bg={"#eee8c5"}
      paddingX={20}
    >
      <Box width={"100%"}>
        <Link to={"/"}>
          <Text
            as={"h1"}
            display={"flex"}
            color='#00111c'
            fontWeight={600}
            fontSize={24}
          >
            <Icon as={FaRegStarHalf} alignSelf={"center"} fontSize={"2rem"} />
            FluxBuy
          </Text>
        </Link>
      </Box>
      <Box width={"100%"}>
        <Input
          type={"text"}
          width={80}
          fontWeight={400}
          paddingY={5}
          bg={"#f8f9fa"}
          border={"2px #ffffff solid !important "}
          placeholder='Search for items, brands...'
          _placeholder={{ fontSize: "14px", color: "#0c1821" }}
        />
      </Box>
      <Flex width={"100%"} gap={4}>
        <Button
          paddingX={4}
          paddingY={6}
          rounded={14}
          bg={"#f8f9fa"}
          fontSize={23}
        >
          <Icon as={AiOutlineHeart} />
        </Button>
        <Button
          type='submit'
          onClick={() => setOpen(!isOpen)}
          paddingX={4}
          paddingY={6}
          rounded={14}
          bg={"#f8f9fa"}
          fontSize={23}
        >
          <Icon as={MdOutlineShoppingCart} />
          <Flex
            width={6}
            height={6}
            alignItems={"center"}
            justify={"center"}
            rounded={100}
            position={"absolute"}
            bg={"#d90429"}
            right={0}
            top={-1}
          >
            <Text fontSize={12} color={"#f4f4f4"} textAlign={"center"}>
              {cartTotalQuantity}
            </Text>
          </Flex>
        </Button>
        {User ? (
          <Flex alignItems={"center"} gap={4}>
            <Text fontWeight={500}> {User.email}</Text>
            <Button
              onClick={() => dispatch(logOut())}
              paddingX={8}
              paddingY={6}
              rounded={14}
              bg={"#00111c"}
              color={"#fdfdfd"}
              _hover={{ bg: "#fdfdfd", color: "#00111c" }}
              fontSize={16}
            >
              LogOut
            </Button>
          </Flex>
        ) : (
          <>
            <Link to={"/login"}>
              <Button
                paddingX={8}
                paddingY={6}
                rounded={14}
                bg={"#00111c"}
                color={"#fdfdfd"}
                _hover={{ bg: "#fdfdfd", color: "#00111c" }}
                fontSize={16}
              >
                Sign In
              </Button>
            </Link>
          </>
        )}
      </Flex>
      <Cartbar show={!isOpen} handleCart={handleCart} />
      <Overlay showOverlay={!isOpen} handleCart={handleCart} />
    </HStack>
  );
};

export default Navbar;
