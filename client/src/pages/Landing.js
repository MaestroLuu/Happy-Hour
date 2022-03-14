import React from "react";
import Footer from "../components/Footer";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Beers from '../components/beers2.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Landing() {
  return (
    <div>
      <h1 style={{textAlign: "center", fontSize: "45px"}}>Happy Hour</h1>
      <Card sx={{ maxWidth: 345, mx: "auto" }}>
        <CardMedia
          component="img"
          height="250"
          image={Beers}
          alt="beers"
        />
      <h3 style={{textAlign: "center", marginTop: "50px", fontSize: "25px"}}>For local happy hour <br/>information type in your <br/>zipcode below.</h3>
      <TextField sx={{ maxWidth: 300, marginTop: "50px", mx: "auto"}} style={{display: "flex", justifyContent: "center"}} id="outlined-search" label="Search By Zipcode" type="search" />
      <Button sx={{ maxWidth: 100, marginLeft: "120px", marginBottom: "10px"}} variant="outlined" size="large">
          Submit
        </Button>
      
      </Card>
      <Footer 
      sx={{mx: "auto"}}/>
    </div>
  );
}
