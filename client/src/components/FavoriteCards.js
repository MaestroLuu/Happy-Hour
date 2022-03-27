import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useMutation, useQuery } from "@apollo/client";
import { ME } from "../util/queries";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { REMOVE_FAVORITE_RESTAURANT } from "../util/mutations";
import DeleteIcon from "@mui/icons-material/Delete";

const FavoriteCards = () => {
  const { loading, data } = useQuery(ME);
  const restaurants = data?.me.favoriteRestaurants || [];

  const [removeFavorite] = useMutation(REMOVE_FAVORITE_RESTAURANT, {
    // refetchQueries so once removeFavorite gets called the favorite restaurants will update from ME query
    refetchQueries: [ME],
  });

  const handleRemove = (restaurantId) => {
    removeFavorite({ variables: { restaurantId } });
  };

  return (
    <div>
      {loading && <p>loading restaurants...</p>}
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant._id}
          sx={{ maxWidth: 345, my: "30px", mx: "auto" }}
        >
          <Link to={`/restaurants/${restaurant._id}`}>
            <CardMedia
              component="img"
              height="200"
              image={restaurant.restaurantImg}
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
            <DeleteIcon onClick={() => handleRemove(restaurant._id)}>Unlike</DeleteIcon>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FavoriteCards;
