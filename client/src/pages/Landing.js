import React from "react";
import Footer from "../components/Footer";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Beers from "../components/beers2.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Landing() {
  return (
    <div>
      <Card sx={{ maxWidth: 345, mx: "auto", marginBottom: "50px" }}>
      <h1 style={{ textAlign: "center", fontSize: "45px" }}>Happy Hour</h1>
        <CardMedia component="img" height="250" image={Beers} alt="beers" />
        <h3
          style={{ textAlign: "center", marginTop: "30px", fontSize: "25px" }}
        >
          For local happy hour <br />
          information type in your <br />
          zipcode below.
        </h3>
        <TextField
          sx={{ maxWidth: 300, marginTop: "30px", mx: "auto" }}
          style={{ display: "flex", justifyContent: "center" }}
          id="outlined-search"
          label="Search By Zipcode"
          type="search"
        />
        <Button
          sx={{ maxWidth: 100, marginLeft: "120px", my: "10px" }}
          variant="outlined"
          size="large"
        >
          Submit
        </Button>
      </Card>
      <br />
      <Footer sx={{ mx: "auto" }} />
    </div>
  );
}
