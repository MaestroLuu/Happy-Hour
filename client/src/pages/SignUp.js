import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import "./SignUp.css";


// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach


const initialFormState = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const { isLoggedIn, signup, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert.
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    signup(formState);
  };

  if (isLoggedIn) {
    // navigate to the home page
    return <Navigate to="/" replace />
  }
  return (
    <div>
      <h1 className="signup-center">Sign Up</h1>
    
      <form onSubmit={handleSubmit}>

        <div className="border-bottom">
        <p>Email</p>
          <MailOutlineOutlinedIcon className="flex"/>
          <input
            autoFocus
            disabled={loading}
            id="email"
            type="text"
            placeholder="Type your email"
            name="email"
            value={formState.email.value}
            onChange={handleInputChange}
          />
        </div>

        <div className="border-bottom">
          <p>Username</p>
          
          <PersonOutlineOutlinedIcon className="flex"/>
          <input
            disabled={loading}
            id="username"
            type="username"
            name="username"
            placeholder="Type your username"
            value={formState.username.value}
            onChange={handleInputChange}
          />
        </div>

        <div className="border-bottom">
          <p>Password</p>
          <KeyOutlinedIcon className="flex"/>
          <input
            disabled={loading}
            id="new-password"
            type="password"
            name="password"
            placeholder="Type your password"
            value={formState.password.value}
            onChange={handleInputChange}
          />
        </div>

        <div className="signup-button">
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "SIGN UP"}
          </button>
        </div>
      
        <p>Already a member?</p>
        <p>LOGIN</p>

      </form>
    </div>
  );
}
