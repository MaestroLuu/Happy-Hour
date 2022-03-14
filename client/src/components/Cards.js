import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import RestaurantImg from "./Restaurant.jpeg";
import {useQuery } from "@apollo/client";
import {QUERY_ALL_RESTAURANTS} from "../util/queries";


const Cards = () => {
  const {data} = useQuery(QUERY_ALL_RESTAURANTS);
  const restaurants = data?.restaurants || [];
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
              {/* {restaurant.foodSpecial}  */}
              {/* {restaurant.drinkSpecial} */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address Blvd, San Diego, CA 92104
            </Typography>
            <Typography variant="body2" color="text.primary">
              Happy Hours: 5PM - 7PM
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
