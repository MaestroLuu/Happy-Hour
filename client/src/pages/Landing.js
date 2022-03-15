import React from "react";
import Footer from "../components/Footer";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Beers from "../components/beers2.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";
import Home from "./Home";

import { useNavigate } from 'react-router';

export default function Landing() {
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
      </Card>
      <br />
      <Footer sx={{ mx: "auto" }} />
    </div>
  );
}
