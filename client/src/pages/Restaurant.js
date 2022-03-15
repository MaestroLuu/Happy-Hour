import React from "react";
import Specials from "../components/Specials";
import Footer from "../components/Footer";

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
      <h1 style={{textAlign: "center", marginTop: "50px"}}> Happy Hour Specials</h1>
      <div>
      <Specials />
      </div>     

      <h1 style={styles.text}>Reviews</h1>

      <Footer />
    </div>
  );
}