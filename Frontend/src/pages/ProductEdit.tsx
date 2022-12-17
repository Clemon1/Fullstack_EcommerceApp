import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductEdit = () => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [data, setData] = useState<[]>([]);
  const [image, setImage] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();
  interface handleCategory {
    _id: string;
    Name: string;
  }

  const body = {
    title,
    price,

    description,
    category,
  };
  useEffect(() => {
    const fetchSingleData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/product/${id}`);
        await res.data;
        setTitle(res.data.title);
        setPrice(res.data.price);
        // setImage(res.data.image)
        setDescription(res.data.description);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleData();
  }, [id]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("http://localhost:4000/category");
        await setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  const handleEdit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:4000/product/${id}`, body);
      await res.data;
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='productCreate'>
      <div>
        <form className='prForm' onSubmit={handleEdit}>
          <h3> Edit Product</h3>
          <div className='Form_Control'>
            <label>Product Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              placeholder='Input title'
              value={title}
            />
          </div>

          <div className='Form_Control'>
            <label>Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              type='text'
              value={price}
            />
          </div>
          <div className='Form_Control'>
            <label>Product Category</label>
            <select onChange={(e) => setCategory(e.target.value)} name='' id=''>
              <option value={category} label='Select New Category' />
              {data.map((data: handleCategory) => (
                <option key={data._id} value={data._id}>
                  {data.Name}
                </option>
              ))}
            </select>
          </div>
          <div className='Form_Control'>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type='submit'> Edit</button>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
