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
            element={
              User && User.isAdmin === true ? (
                <Dashboard />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path='/products'
            element={
              User && User.isAdmin === true ? (
                <Products />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path='/products/:id'
            element={
              User && User.isAdmin === true ? (
                <SingleProduct />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path='/products/create'
            element={
              User && User.isAdmin === true ? (
                <ProductCreate />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path='/products/edit/:id'
            element={
              User && User.isAdmin === true ? (
                <ProductEdit />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path='/category'
            element={
              User && User.isAdmin === true ? (
                <Categories />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path='/category/create'
            element={
              User && User.isAdmin === true ? (
                <CreateCategory />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          {/* <Route
            path='/users/:id/verify/:token'
            element={
              User && User.isAdmin === true ? (
                <EmailVerify />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          /> */}
          <Route
            path='/order/:id'
            element={
              User && User.isAdmin === true ? (
                <EditOrder />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
