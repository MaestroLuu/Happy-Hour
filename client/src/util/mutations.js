import { gql } from "@apollo/client";

// SIGN UP PAGE
export const CREATE_USER = gql`
mutation createUser($email: String!, $username: String!, $password: String!) {
  createUser(email: $email, username: $username, password: $password) {
    token
    user {
      _id
      username
      email
      password
    }
  }
}
`;

// LOGIN PAGE
export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      password
    }
  }
}
`;

// // USER PROFILE
// export const ADD_FAVORITE_RESTAURANT = gql`
// mutation addFavoriteRestaurant($restaurantId: ID!) {
//   addFavoriteRestaurant(restaurantId: $restaurantId) {
//     favoriteRestaurants {
//       _id
//       restaurantName
//       address
//       happyHours
//       foodSpecial
//       drinkSpecial
//     }
//   }
// }
// `;

// // USER PROFILE
// export const REMOVE_FAVORITE_RESTAURANT = gql`
// mutation removeFavoriteRestaurant($restaurantId: ID!) {
//   removeFavoriteRestaurant(restaurantId: $restaurantId) {
//     favoriteRestaurants {
//       _id
//       restaurantName
//       address
//       happyHours
//       foodSpecial
//       drinkSpecial
//     }
//   }
// }
// `;

// // RESTAURANT PAGE
// export const ADD_REVIEW = gql`
// mutation addReview($restaurantId: ID!, $reviewText: String!) {
//   addReview(restaurantId: $restaurantId, reviewText: $reviewText) {
//     _id
//     restaurantName
//     reviews {
//       _id
//       reviewAuthor
//       reviewText
//       createdAt
//       stars
//     }
//   }
// }
// `;

// // RESTAURANT PAGE
// export const DELETE_REVIEW = gql`
// mutation deleteReview($restaurantId: ID!, $reviewText: String!) {
//   deleteReview(restaurantId: $restaurantId, reviewText: $reviewText) {
//     _id
//     restaurantName
//     reviews {
//       _id
//     }
//   }
// }
// `;

// // RESTAURANT PAGE
// export const UPDATE_REVIEW = gql`
// mutation addReview($restaurantId: ID!, $reviewText: String!) {
//   addReview(restaurantId: $restaurantId, reviewText: $reviewText) {
//     _id
//     restaurantName
//     reviews {
//       _id
//       reviewText
//       createdAt
//       stars
//     }
//   }
// }
// `;