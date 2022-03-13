import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  me {
    favoriteRestaurants {
      _id
      restaurantName
      address
      happyHours
      foodSpecial
      drinkSpecial
    }
  }
`;

export const QUERY_SINGLE_RESTAURANT = gql`
restaurant(id: $restaurantId) {
  _id
  restaurantName
  address
  drinkSpecial
  foodSpecial
  foodType
  happyHours
  items {
    _id
    itemName
    price
  }
  reviews {
    _id
    reviewAuthor
    reviewText
    createdAt
    stars
  }
`;

export const QUERY_ALL_RESTAURANTS = gql`
  restaurants {
    _id
    restaurantName
    address
    zipCode
    happyHours
    foodSpecial
    drinkSpecial
  }
`;

