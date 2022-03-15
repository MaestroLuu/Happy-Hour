import React from "react";
import Cards from "../components/Cards";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import { useState } from "react";
import Button from "@mui/material/Button";

// import { useAuth } from "../util/auth";

const Home = () => {
  const [zipcode, setZipcode] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const zvalue = e.target.value;
    setZipcode(zvalue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/restaurants?zipcode=${zipcode.trim()}`);
  };

  // const { isLoggedIn, user } = useAuth();
  return (
    <div>
      {/* TODO: display logged in user's username */}
      {/* <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1> */}
     
      <Box sx={{ mx: "auto" }}></Box>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ maxWidth: 300, marginTop: "30px", mx: "auto" }}
          style={{ display: "flex", justifyContent: "center" }}
          id="outlined-search"
          label="Search By Zipcode"
          type="search"
          value={zipcode}
          onChange={handleChange}
        />
        <Button
          sx={{ maxWidth: 100, marginLeft: "120px", my: "10px" }}
          variant="outlined"
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </form>
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
