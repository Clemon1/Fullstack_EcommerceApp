import "./App.css";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Navbar from "./components/navbar";
import SingleProduct from "./pages/singleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Order from "./pages/order";
import SuccessPage from "./pages/successPage";
function App() {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      boxSizing='border-box'
      bg={"#dee2e6"}
      padding={0}
      margin={0}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<SingleProduct />} />
          <Route path='/order' element={<Order />} />
          <Route path='/order/success' element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
