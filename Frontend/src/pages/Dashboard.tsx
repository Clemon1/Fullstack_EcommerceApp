import { currentUser } from "../Redux/authSlice";
import { useAppSelector } from "../Redux/hook";
import { useState, useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
  const User = useAppSelector(currentUser);
  const [product, setProduct] = useState<any>([]);
  const [category, setCategory] = useState<[]>([]);

  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:5000/product");
      setProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/category");
      await setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
    fetchCategory();
  }, []);
  return (
    <div className='dashboard'>
      <div>
        {User && (
          <p>
            Welcome {User.firstName} {User.lastName}
          </p>
        )}
      </div>

      <div className='dashBoard_header'>
        <div className='Card'>
          <h2> Products</h2>

          <p> {product && product.length}</p>
        </div>
        <div className='Card'>
          <h2> Categories</h2>
          <p> {category && category.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
