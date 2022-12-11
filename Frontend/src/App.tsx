import "./App.css";
import {
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

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

function App() {
  const User = useAppSelector(currentUser);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
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
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/products/create' element={<ProductCreate />} />
        <Route path='/products/edit/:id' element={<ProductEdit />} />
        <Route path='/category' element={<Categories />} />
        <Route path='/category/create' element={<CreateCategory />} />
      </Route>,
    ),
  );

  return (
    <div className='App'>
      <Navbar />
      <RouterProvider router={router} />;
    </div>
  );
}
export default App;
