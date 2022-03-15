import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import React from "react";

import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach
const styles = {
  formControl: {
    display: "flex",
    padding: "0.25em",
  },
  label: {
    flex: "0 1 6em",
    paddingRight: "0.25em",
  },
};

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
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Username
            </InputLabel>
            <Input
              autoFocus
              disabled={loading}
              id="username"
              type="text"
              placeholder="Type your username"
              name="username"
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

        <div style={styles.formControl}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
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

        <div>
          <FormControl  variant="standard">
              <InputLabel htmlFor="new-password" style={styles.label}>
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
            {loading ? "Loading..." : "SIGN UP"}
          </button>
        </div>

        {/*////////////////////////////////////////////////////////////////////////*/}



      </form>
    </div>
  );
}
