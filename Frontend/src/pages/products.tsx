import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
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

  const [data, setData] = useState<[]>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/product");
      await setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteProduct = async (id: any) => {
    const res = await axios.delete(`http://localhost:5000/product/${id}`, {
      data,
    });
  };

  return (
    <div className='productHome'>
      <div className=''>
        <Link to={"/products/create"}>
          <button>Create</button>
        </Link>
      </div>
      {!data ? (
        <p> Error fetching product</p>
      ) : (
        data.map((data: product) => (
          <div className='productCard' key={data._id}>
            <img src={`http://localhost:5000/${data.image}`} />
            <Link to={`/products/${data._id}`}>
              <h2> {data.title}</h2>
            </Link>
            <p> {data.price}</p>
            {/* <p> {data.category.name}</p> */}
            <Link to={`/products/edit/${data._id}`}>
              <button> Edit Product</button>
            </Link>

            <button onClick={() => deleteProduct(data._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
