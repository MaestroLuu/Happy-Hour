import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import RestaurantImg from "./Restaurant.jpeg";
import {useQuery } from "@apollo/client";
import {QUERY_BY_ZIPCODE} from "../util/queries";

const Cards = ({zipcode}) => {
  const {error, data} = useQuery(QUERY_BY_ZIPCODE, {variables: { zipcode }});
  const restaurants = data?.restaurants || [];
  console.log(error);
  console.log(data);
  
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Card key={restaurant._id} sx={{ maxWidth: 345, mx: "auto" }}>
          <CardMedia
            component="img"
            height="200"
            image={RestaurantImg}
            alt="restaurant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {restaurant.restaurantName}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {restaurant.foodType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {restaurant.address} {restaurant.zipCode}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {restaurant.happyHours}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
