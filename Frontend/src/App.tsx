import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAppSelector } from "./Redux/hook";
import { currentUser } from "./Redux/authSlice";
import Products from "./pages/products";
import ProductCreate from "./pages/productCreate";
import ProductEdit from "./pages/ProductEdit";
import SingleProduct from "./pages/singleProduct";
import CreateCategory from "./pages/createCategory";
import Categories from "./pages/Category";
import EmailVerify from "./pages/EmailVerify";
import EditOrder from "./pages/editOrder";

function App() {
  const User = useAppSelector(currentUser);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path='/'
            element={User ? <Navigate to={"/dashboard"} /> : <Home />}
          />
          <Route
            path='/login'
            element={User ? <Navigate to={"/dashboard"} /> : <Login />}
          />
          <Route
            path='/dashboard'
            element={User ? <Dashboard /> : <Navigate to={"/login"} />}
          />
          <Route
            path='/products'
            element={User ? <Products /> : <Navigate to={"/login"} />}
          />
          <Route
            path='/products/:id'
            element={User ? <SingleProduct /> : <Navigate to={"/login"} />}
          />
          <Route
            path='/products/create'
            element={User ? <ProductCreate /> : <Navigate to={"/login"} />}
          />
          <Route
            path='/products/edit/:id'
            element={User ? <ProductEdit /> : <Navigate to={"/login"} />}
          />
          <Route
            path='/category'
            element={User ? <Categories /> : <Navigate to={"/login"} />}
          />
          <Route
            path='/category/create'
            element={User ? <CreateCategory /> : <Navigate to={"/login"} />}
          />
          <Route path='/users/:id/verify/:token' element={<EmailVerify />} />
          <Route path='/order/:id' element={<EditOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
