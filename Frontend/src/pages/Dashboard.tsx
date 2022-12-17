import { currentUser } from "../Redux/authSlice";
import { useAppSelector } from "../Redux/hook";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const User = useAppSelector(currentUser);
  const [product, setProduct] = useState<any>([]);
  const [category, setCategory] = useState<[]>([]);
  const [orders, setOrders] = useState<[]>([]);

  interface orderProduct {
    _id: string;
    userId: {
      firstName: string;
      lastName: string;
    };
    products: [
      {
        _id: {
          title: string;
        };
        cartQuantity: number;
      },
    ];

    amount: number;
    otherPhone: string;
    status: string;
  }

  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:4000/product");
      setProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategory = async () => {
    try {
      const res = await axios.get("http://localhost:4000/category");
      await setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOrder = async () => {
    try {
      const res = await axios.get("http://localhost:4000/order");
      await setOrders(res.data);
      console.log(res.data);
    } catch (err: any) {
      console.log(err.response.message);
    }
  };
  useEffect(() => {
    getProduct();
    fetchCategory();
    fetchOrder();
  }, []);
  return (
    <div className='dashboard'>
      <div className='dashName'>
        {User && (
          <p>
            Dashboard <br />
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
        <div className='Card'>
          <h2> Orders</h2>
          <p> {orders && orders.length}</p>
        </div>
      </div>

      <div className='dashBoard_Body'>
        <h2> Orders</h2>
        <div className='orderBody'>
          <table className='styled-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Product & Quantity</th>
                <th>Amount</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: orderProduct) => (
                <tr className='active-row' key={order._id}>
                  <td>{order._id}</td>
                  <td>
                    {order.userId.firstName} {order.userId.lastName}
                  </td>
                  <td>
                    {order.products.map((a) => (
                      <li>
                        {a._id.title} x{a.cartQuantity}
                      </li>
                    ))}
                  </td>
                  <td>$ {order.amount}</td>
                  <td>{order.otherPhone}</td>
                  {(order.status === "pending" && (
                    <td>
                      {" "}
                      <span className='pending'>{order.status}</span>
                    </td>
                  )) ||
                    (order.status === "Successful" && (
                      <td>
                        <span className='sucess'>{order.status}</span>
                      </td>
                    )) ||
                    (order.status === "Failed" && (
                      <td>
                        <span className='failed'>{order.status}</span>
                      </td>
                    ))}

                  <td>
                    <Link to={`/order/${order._id}`}>
                      <button className='btn_action'> Process</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
