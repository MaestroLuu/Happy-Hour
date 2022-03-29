import React from "react";
import RestaurantCards from "../components/RestaurantCards";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
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
    setZipcode("");
  };

  // const { isLoggedIn, user } = useAuth();
  return (
    <div>
      {/* TODO: display logged in user's username */}
      {/* <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1> */}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit} >
          <TextField
            sx={{ maxWidth: 175, my: "10px", backgroundColor: "white", opacity: 0.85, height: "45px", color: "black", mx: "auto" }}
            id="filled-hidden-label-small"
            variant="filled"
            size="small"
            label="Search By Zipcode"
            type="search"
            value={zipcode}
            onChange={handleChange}
          />
          <Button
            sx={{ maxWidth: 100, marginLeft: "20px", my: "10px", backgroundColor: "rgb(222,119,1)"}}
            variant="contained"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
      <RestaurantCards />
    </div>
  );
};

export default Home;
