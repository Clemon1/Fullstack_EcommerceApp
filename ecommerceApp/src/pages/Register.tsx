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

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<String>("");
  const [lastName, setLastName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const [error, setError] = useState<boolean>(false);
  const [password, setPassword] = useState<String>("");
  const body = { firstName, lastName, email, password };
  const handleSignUp = async (e: any) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:4000/auth/register", body);
      await res.data;
      setMessage(res.data.message);
      console.log(res.data);
    } catch (error) {
      console.log(error);
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
          <form action='' onSubmit={handleSignUp}>
            {message && (
              <Box
                width={"100%"}
                padding={2}
                rounded={5}
                color={"#ffffff"}
                bg={"#29bf12"}
              >
                {" "}
                {message}
              </Box>
            )}
            <Text
              fontSize={19}
              fontWeight={600}
              color={"#00111c"}
              marginBottom={5}
              textAlign='center'
            >
              Register
            </Text>
            <Flex gap={6}>
              <FormControl marginBottom={4}>
                <FormLabel>First Name</FormLabel>
                <Input
                  border={"2px solid #00111c!important"}
                  fontWeight={500}
                  onChange={(e) => setFirstName(e.target.value)}
                  type='text'
                />
              </FormControl>
              <FormControl marginBottom={4}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  onChange={(e) => setLastName(e.target.value)}
                  border={"2px solid #00111c!important"}
                  fontWeight={500}
                  type='text'
                />
              </FormControl>
            </Flex>

            <FormControl marginBottom={4}>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                border={"2px solid #00111c!important"}
                fontWeight={500}
                type='email'
              />
            </FormControl>
            <FormControl marginBottom={4}>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                border={"2px solid #00111c!important"}
                fontWeight={500}
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
              Register
            </Button>
            <Text fontSize={16} fontWeight={500}>
              Have an account? <Link to={"/login"}>Login</Link>
            </Text>
          </form>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Register;
