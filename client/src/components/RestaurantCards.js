import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RestaurantImg from "./Restaurant.jpeg";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_BY_ZIPCODE } from "../util/queries";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { ADD_FAVORITE_RESTAURANT } from "../util/mutations";

const Cards = () => {
  const [searchParams] = useSearchParams();
  const zipCode = parseInt(searchParams.get("zipcode"));

  const { error, loading, data } = useQuery(QUERY_BY_ZIPCODE, {
    variables: { zipCode },
  });
  const restaurants = data?.restaurantsByZipcode || [];

  const [addFavorite, addFavoriteState] = useMutation(ADD_FAVORITE_RESTAURANT);

  const handleFavorite = (restaurantId) => {
    addFavorite({ variables: { restaurantId } });
  };

  return (
    <div>
      {loading && <p>loading restaurants...</p>}
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant._id}
          sx={{ maxWidth: 345, my: "30px", mx: "auto" }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Link to={`/restaurants/${restaurant._id}`}>
            <CardMedia
              component="img"
              height="200"
              image={RestaurantImg}
              alt="restaurant"
            />
          </Link>
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
            <Button onClick={() => handleFavorite(restaurant._id)}>
              Favorite
            </Button>
          </CardContent>
          </Box>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
