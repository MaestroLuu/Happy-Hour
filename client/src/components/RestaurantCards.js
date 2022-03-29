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
import "../../src/index.css";

const Cards = () => {
  const [searchParams] = useSearchParams();
  const zipCode = parseInt(searchParams.get("zipcode"));

  const { error, loading, data } = useQuery(QUERY_BY_ZIPCODE, {
    variables: { zipCode },
  });
  const restaurants = data?.restaurantsByZipcode || [];

  const featuredRestaurant = restaurants[restaurants.length - 1];

  const [addFavorite, addFavoriteState] = useMutation(ADD_FAVORITE_RESTAURANT);

  const handleFavorite = (restaurantId) => {
    addFavorite({ variables: { restaurantId } });
  };

  // display missing data if zipcode is not found
  if (restaurants.length === 0) {
    return (
      <div
        sx={{
          maxWidth: 345,
          mx: "auto",
          marginBottom: "50px",
          backgroundColor: "transparent",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            marginTop: "30px",
            color: "white",
            textShadow: "0px 0px 10px darkred",
          }}
        >
          Oops! <br/>
          😢
        </h1>
        <h3
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "25px",
            color: "white",
            textShadow: "0px 0px 10px darkred",
          }}
        >
          There aren't any <br />
          happy hour specials <br />
          in your selected zipcode. <br/> <br/>

          Please try another zipcode!
        </h3>
      </div>
    );
  }

  return (
    <Box>
    <Box sx={{ flexGrow: 1, borderBottom: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}></Grid>
      {loading && <p>loading restaurants...</p>}
        <Card
          key={featuredRestaurant._id}
          sx={{ maxWidth: "50vw", my: "30px", mx: "auto" }}
        >
          <Grid
            xs={12}
            sx={{ display: "flex", flexDirection: { xs: "column" } }}
            key={featuredRestaurant._id}
          >
            <Link
              to={`/restaurants/${featuredRestaurant._id}`}
              style={{ width: "100%" }}
            >
              <CardMedia
                component="img"
                image={featuredRestaurant.restaurantImg}
                alt="featuredRestaurant"
              />
            </Link>
            <CardContent>
            <Typography gutterBottom component="div" fontSize="20px" color="red">
                Featured Restaurant
              </Typography>
              <Typography gutterBottom component="div">
                {featuredRestaurant.restaurantName}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {featuredRestaurant.address} <br />
                {featuredRestaurant.city}, {featuredRestaurant.state}
                <br />
                {featuredRestaurant.zipCode}
              </Typography>

              <Typography variant="body2" color="text.primary">
                {featuredRestaurant.happyHours}
              </Typography>
              {/* <Button onClick={() => handleFavorite(restaurant._id)}>
                Favorite
              </Button> */}
            </CardContent>
          </Grid>
        </Card>
    </Box>
    <Box sx={{ flexGrow: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}></Grid>
      {loading && <p>loading restaurants...</p>}
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant._id}
          sx={{ maxWidth: "50vw", my: "30px", mx: "auto" }}
        >
          <Grid
            xs={12}
            sx={{ display: "flex", flexDirection: { xs: "column" } }}
            key={restaurant._id}
          >
            <Link
              to={`/restaurants/${restaurant._id}`}
              style={{ width: "100%" }}
            >
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

              <Typography variant="body2" color="text.secondary">
                {restaurant.address} <br />
                {restaurant.city}, {restaurant.state}
                <br />
                {restaurant.zipCode}
              </Typography>

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
    </Box>
  );
};

export default Cards;
