import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import React from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import MailIcon from "@mui/icons-material/Mail";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach

const initialFormState = {
  email: "",
  password: "",
};

export default function Login() {
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

  if (isLoggedIn) {
    // navigate to page user was redirected from or the home page.
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />
  }

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleSubmit}>

          {/*////////////////////////////////////////////////////////////////////////*/}


        <div>
          <FormControl variant="standard">
            <InputLabel htmlFor="email">
              Email
            </InputLabel>
            <Input
              disabled={loading}
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
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
            <InputLabel htmlFor="new-password">
              Password
            </InputLabel>
            <Input
              disabled={loading}
              id="new-password"
              type="password"
              name="password"
              placeholder="Enter password"
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
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}