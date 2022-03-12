const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    me: User
    restaurant(id: ID!): Restaurant
    restaurants: [Restaurant]
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
    addFavoriteRestaurant(restaurantId: ID!): User
    removeFavoriteRestaurant(restaurantId: ID!): User
    addReview(reviewId: ID!, reviewText: String!): Restaurant
    deleteReview(reviewId: ID!): Restaurant
    updateReview(reviewId: ID!, reviewText: String!): Restaurant
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
    address: String!
    zipCode: Int!
    drinkSpecial: Boolean!
    foodSpecial: Boolean!
    foodType: String!
    happyHours: String!
    items: [Item]!
    reviews: [Review]
  }

  type Item {
    _id: ID!
    itemName: String!
    price: Float!
    description: String
  }

  type Review {
    reviewAuthor: String!
    reviewText: String!
    createdAt: String
    stars: Int
  }
`;

module.exports = typeDefs;
