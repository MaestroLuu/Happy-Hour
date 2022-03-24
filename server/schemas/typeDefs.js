const { gql } = require("apollo-server-express");

// Review if "restaurantsByZipcode(zipCode: Int!): [Restaurant]" correct with params

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    me: User
    restaurant(id: ID!): Restaurant
    restaurants: [Restaurant]
    restaurantsByZipcode(zipCode: Int!): [Restaurant]
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
    addFavoriteRestaurant(restaurantId: ID!): User
    removeFavoriteRestaurant(restaurantId: ID!): User
    addReview(restaurantId: ID!, reviewText: String!): Restaurant
    deleteReview(restaurantId: ID!, reviewId: ID!): Restaurant
    updateReview(
      restaurantId: ID!
      reviewId: ID!
      reviewText: String!
    ): Restaurant
  }

  type Auth {
    token: String!
    user: User!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    favoriteRestaurants: [Restaurant]
  }

  type Restaurant {
    _id: ID!
    restaurantName: String!
    phoneNumber: String
    webpage: String
    restaurantImg: String
    address: String!
    city: String!
    zipCode: Int!
    state: String
    country: String
    happyHours: String!
    items: [Item]!
    reviews: [Review]
  }

  type Item {
    _id: ID!
    itemName: String!
    price: String!
    description: String
  }

  type Review {
    _id: ID!
    reviewAuthor: String!
    reviewText: String!
    createdAt: String
    stars: Int
  }
`;

module.exports = typeDefs;
