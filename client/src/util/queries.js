import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      favoriteRestaurants {
        _id
        restaurantName
        restaurantImg
        address
        city
        zipCode
        state
        country
        happyHours
      }
    }
  }
`;

// Took out stars in reviews, add back later if decide to use it

export const QUERY_SINGLE_RESTAURANT = gql`
  query Restaurant($restaurantId: ID!) {
    restaurant(id: $restaurantId) {
      _id
      restaurantName
      phoneNumber
      webpage
      restaurantImg
      address
      city
      zipCode
      state
      country
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
      }
    }
  }
`;

export const QUERY_BY_ZIPCODE = gql`
  query RestaurantsByZipcode($zipCode: Int!) {
    restaurantsByZipcode(zipCode: $zipCode) {
      _id
      restaurantName
      restaurantImg
      address
      city
      zipCode
      state
      country
      happyHours
    }
  }
`;

// export const QUERY_ALL_RESTAURANTS = gql`
//   query Restaurants {
//     restaurants {
//       _id
//       restaurantName
//       address
//       zipCode
//       foodType
//       happyHours
//     }
//   }
// `;
