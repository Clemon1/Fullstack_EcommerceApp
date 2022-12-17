import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateCategory = () => {
  const [Name, setName] = useState<string>("");
  const navigate = useNavigate();
  const handleCategory = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/category", {
        Name,
      });
      await res.data;
      navigate("/category");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleCategory}>
          <p>Create Category</p>
          <input type='text' onChange={(e) => setName(e.target.value)} />

          <button type='submit'>create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
