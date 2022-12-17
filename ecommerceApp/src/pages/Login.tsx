import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Input,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAppDispatch } from "../features/hooks";
import { loginStart, loginSuccess, loginFailure } from "../features/authSlice";
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const handleLogin = async (e: any) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:4000/auth/userslogin", {
        email,
        password,
      });
      dispatch(loginSuccess(res.data));

      navigate("/");

      console.log(res.data);
    } catch (error: any) {
      dispatch(loginFailure(error));
      setError(error.response.data);
      //
      console.log(error.response.data);
    }
  };
  return (
    <Box width={"100%"} height={"100vh"} bg={"#eee8c5"}>
      <Flex width={"100%"} justifyContent={"center"} height={"100%"} p={6}>
        <Flex
          width={"34%"}
          flexDirection={"column"}
          height={"fit-content"}
          bg={"#f4f4f4"}
          p={4}
          rounded={12}
          boxShadow={"lg"}
        >
          {error && (
            <Flex
              width={"100%"}
              height={"6vh"}
              justifyContent={"center"}
              alignItems={"center"}
              p={2}
              rounded={6}
              bg={"#d90429"}
              color={"#ffffff"}
            >
              <Text textAlign={"center"} fontSize={"17px"} fontWeight={500}>
                {error}
              </Text>
            </Flex>
          )}
          <form action='' onSubmit={handleLogin}>
            <Text
              fontSize={19}
              fontWeight={600}
              color={"#00111c"}
              marginBottom={5}
              textAlign='center'
            >
              Login
            </Text>

            <FormControl marginBottom={4}>
              <FormLabel>Email address</FormLabel>
              <Input
                border={"2px solid #00111c!important"}
                fontWeight={500}
                type='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl marginBottom={4}>
              <FormLabel>Password</FormLabel>
              <Input
                border={"2px solid #00111c!important"}
                fontWeight={500}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
              />
            </FormControl>
            <Button
              marginBottom={3}
              bg={"#00111c"}
              type={"submit"}
              color={"#ffffff"}
              width={"100%"}
            >
              Login
            </Button>
            <Text fontSize={16} fontWeight={500}>
              Dont have an account? <Link to={"/register"}>Register</Link>
            </Text>
          </form>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Login;
