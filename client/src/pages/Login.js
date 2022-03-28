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
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

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
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h1>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <FormControl
              sx={{ marginBottom: "10px", width: "250px", display: "flex", flexDirection: "row", alignItems: "flex-end" }}
              variant="standard"
            >
              {/* <MailIcon sx={{display: 'flex', marginRight: "10px"}}/> */}
              <InputLabel sx={{display: 'flex'}} htmlFor="email"></InputLabel>
              <Input
              sx={{backgroundColor: "white", opacity: "80%", color: "grey", mx: "auto"}}
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
              sx={{ marginBottom: "40px", width: "250px", display: "flex", flexDirection: "row", alignItems: "flex-end" }}
              variant="standard"
            >
              {/* <VpnKeyIcon sx={{display: 'flex', marginRight: "10px"}} /> */}
              <InputLabel htmlFor="new-password"></InputLabel>
              <Input
              sx={{backgroundColor: "white", opacity: "80%", color: "grey", mx: "auto"}}
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
              sx={{ marginBottom: "10px", width: "250px", backgroundColor: "rgb(222,119,1)", color: "white"}}
              disabled={loading}
              type="submit"
              variant="outlined"
            >
              {loading ? "Loading..." : "LOGIN"}
            </Button>
            <p></p>
          </div>
        </form>
       
      </Box>
      <p style={{ textAlign: "center", marginTop: "30px" }}>Do you have an account?
           <br></br>
          If not, sign up <NavLink style={{color: "white"}} to="/signup">
            here.
          </NavLink>
        </p>
    </div>
  );
}