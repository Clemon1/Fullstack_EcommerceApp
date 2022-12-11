import { useState } from "react";
import { useAppDispatch } from "../Redux/hook";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "../Redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [error, setError] = useState<String>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      dispatch(loginSuccess(res.data));

      navigate("/dashboard");

      console.log(res.data);
    } catch (error: any) {
      dispatch(loginFailure(error));
      setError(error.response.data);

      console.log(error.response.data);
    }
  };
  return (
    <div>
      <div className='homeBody'>
        <form className='signUp' onSubmit={handleLogin}>
          <h3> Login</h3>
          {error && (
            <div className='errorDiv'>
              <p>{error}</p>
            </div>
          )}
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
