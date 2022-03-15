import React from "react";
import Cards from "../components/Cards";
import TextField from "@mui/material/TextField";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <div>
      <TextField
        sx={{ maxWidth: 300, marginTop: "50px", mx: "auto" }}
        style={{ display: "flex", justifyContent: "center" }}
        id="outlined-search"
        label="Search By Zipcode"
        type="search"
      />
      <Cards zipcode={props.zipcode} />
      <Footer />
    </div>
  );
};

export default Home;
