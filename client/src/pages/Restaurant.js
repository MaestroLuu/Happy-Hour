import React from "react";
import Drinks from "../components/Drinks";
import Food from "../components/Food";
import Footer from "../components/Footer";
import Review from "../components/Review";

const styles = {
  text: {
    textAlign: "center"
  },
  margin: {
     marginTop: "50px"
  }
}

export default function Restaurant() {
  return (
    <div>
      <h1 style={styles.text}>Restaurant Name</h1>
      <h2 style={styles.text}>Happy Hour: 5PM - 7PM </h2>
      <p style={styles.text}>123 Restaurant Drive, San Diego, CA 92104</p>
      <h1 style={{textAlign: "center", marginTop: "50px"}}> Drink Specials</h1>
      <div>
      <Drinks />
      </div>

      <h1 style={{textAlign: "center", marginTop: "50px"}}>Food Specials</h1>
      <Food />

      <h1 style={styles.text}>Reviews</h1>
      <Review />


      <Footer />
    </div>
  );
}