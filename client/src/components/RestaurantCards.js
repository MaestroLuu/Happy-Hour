import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_BY_ZIPCODE } from "../util/queries";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Button";
import { ADD_FAVORITE_RESTAURANT } from "../util/mutations";
import { useMediaQuery } from "@mui/material";
import "../../src/index.css"

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
    <Box sx={{ flexGrow: 1  }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}></Grid>
      {loading && <p>loading restaurants...</p>}
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant._id}
          sx={{ maxWidth: "75vw", my: "30px", mx: "auto" }}
        >
        <Grid xs={12} sx={{ display: "flex", flexDirection: { xs: "column", md: "row"} }} key={restaurant._id}>
            <Link to={`/restaurants/${restaurant._id}`} style = {{ width: "100%", maxWidth: "700px" }}>
              <CardMedia
                component="img"
                image={restaurant.restaurantImg}
                alt="restaurant"
              />
            </Link>
            <CardContent>
              <Typography gutterBottom component="div">
                {restaurant.restaurantName}
              </Typography>

              {restaurant.location.map((location) => (
                <Typography
                  key={location._id}
                  variant="body2"
                  color="text.secondary"
                >
                  {location.address} <br /> 
                  {location.city}, {location.state}<br /> 
                  {location.zipCode}
                </Typography>
              ))}

              <Typography variant="body2" color="text.primary">
                {restaurant.happyHours}
              </Typography>
              {/* <Button onClick={() => handleFavorite(restaurant._id)}>
                Favorite
              </Button> */}
            </CardContent>
        </Grid>
        </Card>
      ))}
    </Box>
  );
};

export default Cards;
