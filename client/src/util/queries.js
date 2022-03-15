import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      favoriteRestaurants {
        _id
        restaurantName
        address
        happyHours
      }
    }
  }
`;

export const QUERY_SINGLE_RESTAURANT = gql`
  query Restaurant($restaurantId: ID!) {
    restaurant(id: $restaurantId) {
      _id
      restaurantName
      address
      zipCode
      foodType
      happyHours
      items {
        _id
        itemName
        price
        description
      }
      reviews {
        _id
        reviewAuthor
        reviewText
        createdAt
        stars
      }
    }
  }
`;

export const QUERY_BY_ZIPCODE = gql`
  query RestaurantsByZipcode($zipCode: Int!) {
    restaurantsByZipcode(zipCode: $zipCode) {
      restaurantName
      address
      zipCode
      foodType
      happyHours
    }
  }
`;

export const QUERY_ALL_RESTAURANTS = gql`
  query Restaurants {
    restaurants {
      _id
      restaurantName
      address
      zipCode
      foodType
      happyHours
    }
  }
`;
