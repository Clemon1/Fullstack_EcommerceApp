import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const EmailVerify = () => {
  const [ValidUrl, setValidUrl] = useState<boolean>(false);
  const params = useParams();
  useEffect(() => {
    const fetchEmailUrl = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/auth/${params.id}/verify/${params.token}`,
        );
        console.log(res);

        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    fetchEmailUrl();
  }, [params]);
  return (
    <div>
      <div>
        {ValidUrl ? (
          <>
            <div>
              <p> Email verified succesfully</p>
              <Link to='/login'>
                <button>Login</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1> 404 Error</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailVerify;
