import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import { NavLink } from "react-router-dom";
import "./Login.css";

import InputAdornment from "@mui/material/InputAdornment";
import MailIcon from "@mui/icons-material/Mail";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import * as React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

import Input from "@mui/material/Input";


// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/


const initialFormState = {
  email: "",
  password: "",
};

export default function Login() {
  const { isLoggedIn, login, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);
  const location = useLocation();

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    login(formState);
  };
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

  if (isLoggedIn) {
    // navigate to page user was redirected from or the home page.
    const from = location.state?.from?.pathname || "/home";
    return <Navigate to={from} replace />
  }

  return (
    <div>
      <h1 className="title">Login</h1>
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

        <div>
          <button className="login-button" disabled={loading} type="submit">
            {loading ? "Loading..." : "LOGIN"}
          </button>
        </div>
        <div>
          <p className="member">Or Sign Up Using</p>
          <NavLink to="/signup" className="login">
            Sign Up
          </NavLink>
        </div>

      </form>
    </div>
  );
}
