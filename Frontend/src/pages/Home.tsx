import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<String>("");
  const [lastName, setLastName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const body = { firstName, lastName, email, password };
  const SignUp = async (e: any) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:4000/auth/register", body);
      await res.data;
      setMessage(res.data.message);
      console.log();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='homeBody'>
        <form className='signUp' action='POST' onSubmit={SignUp}>
          {message && (
            <div className='errorDiv1'>
              <p>{message}</p>
            </div>
          )}
          <h3> SignUp</h3>
          <div className='Form_Control'>
            <label htmlFor=''>First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type='text'
              placeholder='Enter your First Name'
            />
          </div>
          <div className='Form_Control'>
            <label htmlFor=''>Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type='text'
              placeholder='Enter your Last Name'
            />
          </div>
          <div className='Form_Control'>
            <label htmlFor=''>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Enter your Email'
            />
          </div>
          <div className='Form_Control'>
            <label htmlFor=''>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Enter your Password'
            />
          </div>
          <button type='submit' className='Form_Button'>
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
