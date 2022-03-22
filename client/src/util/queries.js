import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      favoriteRestaurants {
        _id
        restaurantName
        location {
          address
          city
          zipCode
          state
          country
        }
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
      phoneNumber
      webpage
      location {
        address
        city
        zipCode
        state
        country
      }
      happyHours
      items {
        itemName
        price
        description
      }
      reviews {
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
      restaurantName
      location {
        address
        city
        zipCode
        state
        country
      }
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
