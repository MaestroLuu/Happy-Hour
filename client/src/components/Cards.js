import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import RestaurantImg from "./Restaurant.jpeg";
import {useQuery } from "@apollo/client";
import {QUERY_BY_ZIPCODE} from "../util/queries";
import { useSearchParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Cards = () => {
  const [searchParams] = useSearchParams();
  const zipCode = parseInt(searchParams.get('zipcode'));

  const {error, loading, data} = useQuery(QUERY_BY_ZIPCODE, {variables: { zipCode }});
  const restaurants = data?.restaurantsByZipcode || [];
  console.log(error);
  console.log(data);
  
  return (
    <div>
      {loading && <p>loading restaurants...</p>}
      {restaurants.map((restaurant) => (
        <Card key={restaurant._id} sx={{ maxWidth: 345, my: "30px", mx: "auto" }}>
          <NavLink to="/">
          <CardMedia

            component="img"
            height="200"
            image={RestaurantImg}
            alt="restaurant"
          />
          </NavLink>
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
