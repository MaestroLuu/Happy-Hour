import React from "react";

import Cards from "../components/Cards";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Filter from "../components/Filter";
import Footer from "../components/Footer";

// import { useAuth } from "../util/auth";

const Home = () => {
  

  // const { isLoggedIn, user } = useAuth();
  return (
    <div>
      {/* TODO: display logged in user's username */}
      {/* <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1> */}
      <TextField sx={{ maxWidth: 300, marginTop: "50px", mx: "auto"}} style={{display: "flex", justifyContent: "center"}} id="outlined-search" label="Search By Zipcode" type="search" />
      <Box sx={{mx: "auto"}}>
        <Filter />
      </Box>
      
      <Cards />

      <Footer />
    </div>
  );
}

export default Home;
