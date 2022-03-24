import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import React from "react";


import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";

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
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <FormControl
              sx={{ marginBottom: "10px", width: "250px" }}
              variant="standard"
            >
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

          <div>
            <FormControl
              sx={{ marginBottom: "10px", width: "250px" }}
              variant="standard"
            >
              <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
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
            <FormControl
              sx={{ marginBottom: "20px", width: "250px" }}
              variant="standard"
            >
              <InputLabel htmlFor="new-password">Password</InputLabel>
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
              />
            </FormControl>
          </div>

          <div>
            <Button
              sx={{ marginBottom: "10px", width: "250px" }}
              disabled={loading}
              type="submit"
              variant="outlined"
            >
              {loading ? "Loading..." : "SIGN UP"}
            </Button>
          </div>
        </form>
      </Box>
      <p style={{ textAlign: "center", marginTop: "30px" }}>Do you have already have an account?
           <br></br>
          If so, log in <NavLink to="/signup">
            here.
          </NavLink>
        </p>
    </div>
  );
}
