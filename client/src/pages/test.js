import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import MailIcon from "@mui/icons-material/Mail";
import "./SignUp.css";

import * as React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
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
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /////////////////////////////////////////////////

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
    return <Navigate to="/home" replace />;
  }
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      p: 1,
      m: 1,
      bgcolor: 'background.paper',
      borderRadius: 1,
    }}>
  
    <div>
      <h1 className="signup-center">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/*////////////////////////////////////////////////////////////////////////*/}

        <div>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
            <Input
              disabled={loading}
              id="input-with-icon-adornment"
              placeholder="Type your email"
              value={formState.email.value}
              onChange={handleInputChange}
              startAdornment={
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        {/*////////////////////////////////////////////////////////////////////////*/}

        <div>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Username
            </InputLabel>
            <Input
              disabled={loading}
              id="input-with-icon-adornment"
              placeholder="Type your username"
              value={formState.username.value}
              onChange={handleInputChange}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        {/*////////////////////////////////////////////////////////////////////////*/}

        <div>
          <FormControl  variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              placeholder="Type your password"
              type={values.showPassword ? "text" : "password"}
              value={formState.password.value}
              onChange={handleInputChange}
              startAdornment={
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        {/*////////////////////////////////////////////////////////////////////////*/}

        <div className="signup-button">
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "SIGN UP"}
          </button>
        </div>
        <div>


        <Button
          sx={{ maxWidth: 100, marginLeft: "120px", my: "10px" }}
          variant="outlined"
          size="large"
        >
          Submit
        </Button>





          <p className="member">Already a member?</p>
          <NavLink to="/login" className="login">
            Login
          </NavLink>
        </div>
      </form>
    </div>
    </Box>
  );
}