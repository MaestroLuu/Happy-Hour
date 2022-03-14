import React from "react";
import Drinks from "../components/Drinks";
import Food from "../components/Food";
import Footer from "../components/Footer";

const styles = {
  text: {
    textAlign: "center"
  }
}

export default function Restaurant() {
  return (
    <div>
      <h1 style={styles.text}>Restaurant Name</h1>
      <h2 style={styles.text}>Happy Hour: </h2>
      <h1 style={styles.text}> Drink Specials</h1>
      <div>
      <Drinks />
      </div>

      <h1 style={styles.text}>Food Specials</h1>
      <Food />

      <h1 style={styles.text}>Reviews</h1>


      <Footer />
    </div>
  );
}
