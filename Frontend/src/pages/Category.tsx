import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Categories = () => {
  interface category {
    Name: string;
  }
  const [data, setData] = useState<[]>([]);
  const fetchCategory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/category");
      await setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div>
      <Link to='/category/create'>
        <button>Create</button>
      </Link>
      <div className='productHome'>
        {data.map((data: category) => (
          <div className='productCard'>
            <h2>{data.Name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
