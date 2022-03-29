import React from "react";
import Specials from "../components/Specials";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_RESTAURANT } from "../util/queries";
import Review from "../components/Review";
import { Typography } from "@mui/material";
import ReviewForm from "../components/ReviewForm";
import { useAuth } from "../util/auth";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { ADD_FAVORITE_RESTAURANT } from "../util/mutations";

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

  const { isLoggedIn } = useAuth();

  const { data, loading } = useQuery(QUERY_SINGLE_RESTAURANT, {
    variables: { restaurantId: restaurantId },
  });

  const restaurant = data?.restaurant || {};

  const [addFavorite, addFavoriteState] = useMutation(ADD_FAVORITE_RESTAURANT);

  const handleFavorite = (restaurantId) => {
    addFavorite({ variables: { restaurantId } });
  };

  console.log(data);
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {loading && <p>loading restaurants...</p>}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        {restaurant.restaurantName}
      </h1>
      <h2 style={styles.text}>Happy Hour: {restaurant.happyHours}</h2>
      <p style={styles.text}>
        <Typography variant="body">
          {restaurant.address} <br />
          {restaurant.city}, {restaurant.state}
          <br />
          {restaurant.zipCode}
        </Typography>
      </p>
      
      <IconButton
        className="favoriteIcon"
        onClick={() => handleFavorite(restaurant._id)}
      >
        <FavoriteIcon sx={{ color: "white", fontSize: "50px", dropShadow: "3px 5px 2px red" }} />
   </IconButton>

      <h1
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "20px" }}
      >
        {" "}
        Happy Hour Specials
      </h1>

      <div>
        <Specials items={restaurant.items || []} />
      </div>
      {isLoggedIn ? (
        <div>
          <h1 style={styles.text}>Reviews</h1>
          <br></br>
          <ReviewForm restaurantId={restaurantId} />
          <br></br>
          <Review
            restaurant={restaurant._id}
            reviews={restaurant.reviews || []}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "black",
              backgroundColor: "white",
              padding: "10px",
              width: "39ch",
              textAlign: "center",
              marginBottom: "30px"
            }}
          >
            You need to be{" "}
            <NavLink
              to="/login"
              style={{ color: "blue", textDecoration: "none" }}
            >
              logged in
            </NavLink>{" "}
            or{" "}
            <NavLink
              to="/signup"
              style={{ color: "blue", textDecoration: "none" }}
            >
              sign up
            </NavLink>{" "}
            to post and view reviews!
          </p>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
