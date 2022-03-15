import React from "react";
import Specials from "../components/Specials";
import Footer from "../components/Footer";
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
import {QUERY_SINGLE_RESTAURANT} from "../util/queries";

const styles = {
  text: {
    textAlign: "center"
  },
  margin: {
     marginTop: "50px"
  }
}

const Restaurant = () => {
  const { restaurantId } = useParams();
  console.log(restaurantId);
  
  const {data} = useQuery(QUERY_SINGLE_RESTAURANT, {
    variables: {restaurantId: restaurantId}
  });

  const restaurant = data?.restaurant || {};

  console.log(data);
  return (
    <div>
      <h1 style={styles.text}>{restaurant.restaurantName}</h1>
      <h2 style={styles.text}>Happy Hour: {restaurant.happyHours}</h2>
      <p style={styles.text}>{restaurant.address} {restaurant.zipCode}</p>
      <h1 style={{textAlign: "center", marginTop: "50px"}}> Happy Hour Specials</h1>

      <div>
      <Specials items={restaurant.items || [] }/>
      </div>     

      <h1 style={styles.text}>Reviews</h1>

      <Footer />
    </div>
  );
}

export default Restaurant;