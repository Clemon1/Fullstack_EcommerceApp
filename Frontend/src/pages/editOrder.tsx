import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const EditOrder = () => {
  const [userId, setUserId] = useState<string>("");
  const [products, setProducts] = useState<[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [otherPhone, setOtherPhone] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState("");
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
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    const fetchById = async () => {
      const res = await axios.get(`http://localhost:4000/order/${id}`);
      await res.data;
      console.log(res.data);

      await setUserId(res.data.userId);
      await setAmount(res.data.amount);
      await setProducts(res.data.products);
      console.log(res.data.products);

      await setOtherPhone(res.data.otherPhone);
      await setStatus(res.data.status);
    };
    fetchById();
  }, [id]);

  const handleStatus = async (e: any) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:4000/order/${id}`, {
      status,
    });
    await res.data;
    navigate("/dashboard");
  };

  return (
    <div className='dashboard'>
      <div className='dashName1'>
        <form action='' onSubmit={handleStatus}>
          <h3> Check Order</h3>
          <div className='labelList'>
            <label>Id</label>
            <p> {userId}</p>
          </div>
          <div className='labelList'>
            <label>
              products & Quantitys:
              {products.map((product: any) => (
                <li>
                  {product._id.title} x{product.cartQuantity}{" "}
                </li>
              ))}
            </label>
          </div>
          <div className='labelList'>
            <label>Amount:</label>
            <p> {amount}</p>
          </div>
          <div className='labelList'>
            <label>Phone Number:</label>
            <p> {otherPhone}</p>
          </div>
          <div className='labelList'>
            <label>Status:</label>
            {status === "pending" && <span className='pending'> {status}</span>}
            {status === "Successful" && (
              <span className='sucess'> {status}</span>
            )}
            {status === "Failed" && <span className='failed'> {status}</span>}
          </div>

          <select name='' onChange={(e) => setStatus(e.target.value)}>
            <option> Select Status</option>
            <option value='pending'>Pending</option>
            <option value='Successful'>Successful</option>
            <option value='Failed'>Failed</option>
          </select>
          <button type='submit' className='Btn_edit '>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditOrder;
