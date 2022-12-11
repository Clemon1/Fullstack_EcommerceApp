import { logOut } from "../Redux/authSlice";
import { useAppSelector, useAppDispatch } from "../Redux/hook";
import { currentUser } from "../Redux/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const User = useAppSelector(currentUser);

  const loggedOut = () => {
    dispatch(logOut());
  };
  return (
    <nav className='Navbar'>
      <div>
        <p className='navTitle'>Electronic Shop</p>
      </div>
      <div className='navTitle2'>
        <ul>
          <li>Home</li>

          <li>Product</li>
          <li>About Us</li>
        </ul>
        <>
          {User ? (
            <>
              {User.email}

              <button className='Btn_auth' onClick={loggedOut}>
                LogOut
              </button>
            </>
          ) : (
            <>
              <button className='Btn_auth'>Login</button>

              <button className='Btn_auth'>SignUP</button>
            </>
          )}
        </>
      </div>
    </nav>
  );
};

export default Navbar;
