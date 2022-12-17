import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/hook";
import { currentUser, logOut } from "../Redux/authSlice";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const User = useAppSelector(currentUser);

  const loggedOut = () => {
    dispatch(logOut());
  };
  return (
    <nav className='Navbar'>
      <p className='navTitle'>BenStore</p>
      {User ? (
        <>
          <ul>
            <Link to='/dashboard'>
              <li>Home</li>
            </Link>
            <Link to='/products'>
              <li>Products</li>
            </Link>
            <Link to='/category'>
              <li>Categories</li>
            </Link>
          </ul>
          <div className='navTitle2'>
            <p> {User.email}</p>
            <button onClick={loggedOut} className='Btn_auth'>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <div className='navTitle2'>
            <Link to='/login'>
              <button className='Btn_auth'>Login</button>
            </Link>
            <Link to='/'>
              <button className='Btn_auth'>SignUp</button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
