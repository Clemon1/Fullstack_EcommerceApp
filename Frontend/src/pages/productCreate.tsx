import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductCreate = () => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [ImageFile, setImageFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [data, setData] = useState<[]>([]);
  const navigate = useNavigate();

  interface handleCategory {
    _id: string;
    Name: string;
  }

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

  //  Submitting the form
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      title,
      price,
      description,
      category,
      ImageFile,
    };

    const formData = new FormData();
    for (const [key, value] of Object.entries(body)) {
      formData.append(key, value as string);
    }
    console.log(formData);

    console.log(body);
    try {
      const res = await axios.post(
        "http://localhost:4000/product/create",
        formData,
      );
      await res.data;
      navigate("/products");
      console.log(res.data);
    } catch (err: any) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className='productCreate'>
      {isError && <p> Something is wrong</p>}
      <div>
        <form
          className='prForm'
          onSubmit={handleSubmit}
          encType='multipart/form-data'
        >
          <h3> Create Product</h3>
          <div className='Form_Control'>
            <label>Product Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              placeholder='Input title'
            />
          </div>
          <div className='Form_Control'>
            <label>Product Image</label>
            <input
              type='file'
              name='image'
              onChange={(e) =>
                setImageFile(e.target.files ? e.target.files[0] : null)
              }
            />
          </div>
          <div className='Form_Control'>
            <label>Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              type='text'
              placeholder='Input  price'
            />
          </div>
          <div className='Form_Control'>
            <label>Product Category</label>
            <select onChange={(e) => setCategory(e.target.value)} id=''>
              <option value=''>categories</option>
              {data.map((data: handleCategory) => (
                <option key={data._id} value={data._id}>
                  {data.Name}
                </option>
              ))}
            </select>
          </div>
          <div className='Form_Control'>
            <label>Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button type='submit'> Create</button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
