import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const SingleProduct = () => {
  interface product {
    _id: string;
    title: string;
    price: number;
    description: string;
    category: {
      Name: any;
    };
    image: string;
  }
  const { id } = useParams();
  const [data, setData] = useState<any>({});
  const fetchSingleData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/product/${id}`);
      await setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSingleData();
  }, [id]);
  return (
    <div className='productHome'>
      {!data ? (
        <p> No data found</p>
      ) : (
        <div className='productDetails'>
          <h2> {data.title}</h2>
          {/* <img src={data.image} /> */}
          <p> {data.price}</p>
          <p> {data.description}</p>
          <Link to={`/products/edit/${data._id}`}>
            <button> Edit Product</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
