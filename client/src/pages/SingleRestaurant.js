import React from "react";
import Specials from "../components/Specials";
import Footer from "../components/Footer";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_RESTAURANT } from "../util/queries";
import Review from "../components/Review";
import { Typography } from "@mui/material";
import ReviewForm from "../components/ReviewForm";

const styles = {
  text: {
    textAlign: "center",
  },
  margin: {
    marginTop: "50px",
  },
};

const Restaurant = () => {
  const { restaurantId } = useParams();
  console.log(restaurantId);

  const { data, loading } = useQuery(QUERY_SINGLE_RESTAURANT, {
    variables: { restaurantId: restaurantId },
  });

  const restaurant = data?.restaurant || {};

  console.log(data);
  return (
    <div>
      {loading && <p>loading restaurants...</p>}
      <h1 style={styles.text}>{restaurant.restaurantName}</h1>
      <h2 style={styles.text}>Happy Hour: {restaurant.happyHours}</h2>
      <p style={styles.text}>
      {/* data does not load...John scolded us about this several times
      Does anyone remember why? 
      {restaurant.location.map((location) => (
          <Typography key={location._id} variant="body">
            {location.address} <br />
            {location.city}, {location.state}
            <br />
            {location.zipCode}
          </Typography>
        ))} */}

      </p>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        {" "}
        Happy Hour Specials
      </h1>

      <div>
        <Specials items={restaurant.items || []} />
      </div>

      <h1 style={styles.text}>Reviews</h1>
      <ReviewForm />
      <Review reviews={restaurant.reviews || []} />

      <Footer />
    </div>
  );
};

export default Restaurant;
