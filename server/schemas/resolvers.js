const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { User, Restaurant, Review } = require("../models");
const { signToken } = require("../util/auth");
const { dateScalar } = require("./customScalars");

const resolvers = {
  Date: dateScalar,
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Must be logged in.");
      }
      return User.findOne({ email: context.user.email });
    },
    restaurants: async (parent, args) => {
      return Restaurant.find({}).populate('reviews');
    },
    restaurant: async (parent, args) => {
    if (!args) {
      throw new AuthenticationError("Please provide an ID");
    } 
    return Restaurant.findById(args.id).populate('reviews')
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
        const user = await User.create({ ...args });
        const token = await signToken(user);
        return { user, token };
      } catch (error) {
        if (error.name === "MongoError" && error.code === 11000) {
          const [[key, value]] = Object.entries(error.keyValue);
          throw new UserInputError(`${key} "${value}" already exists.`);
        }
        throw error;
      }
    },
    login: async (parent, args) => {
      const { email, password } = args;
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid username or password");
      }
      const authentic = await user.isCorrectPassword(password);
      if (!authentic) {
        throw new AuthenticationError("Invalid username or password");
      }
      const token = await signToken(user);
      user.lastLogin = Date.now();
      await user.save();
      return { token, user };
    },
    addFavoriteRestaurant: async (parent, {restaurantId}, context) => {  
      if (context.user) {
        return await User.findOneAndUpdate(
          {_id: context.user._id},
          { $addToSet: {favoriteRestaurants: restaurantId}},
        )
        .populate('favoriteRestaurants')        
      }
      throw new AuthenticationError("You need to be logged in to favorite a restaurant!");
    },
    removeFavoriteRestaurant: async (parent, {restaurantId}, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { favoriteRestaurants: restaurantId } })
          .populate('favoriteRestaurants');  
      }
      throw new AuthenticationError("You need to be logged in to unfavorite your restaurants!");
    },
    addReview: async (parent, {restaurantId, reviewId, reviewText}, context) => {
      if (context.user) {
        return await Restaurant.findOneAndUpdate(
          {_id: restaurantId},
          { $addToSet: {reviews: {reviewId, reviewText}}},
        )
        .populate('reviews')
      }
      throw new AuthenticationError("You need to be logged in to favorite a restaurant!");

    },
    deleteReview: async (parent, {reviewId}, context) => {
      if (context.restaurant) {
        return await Restaurant.findByIdAndUpdate(
          { _id: context.restaurant._id },
          { $pull: { reviews: { reviewId } } },
          {
            new: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in to delete your review!");
    },
    updateReview: async (parent, {reviewId, reviewText}, context) => {
      if (context.restaurant) {
        return await Restaurant.findbyIdAndUpdate(
          {_id: context.restaurant._id},
          { $push: {reviews: {reviewId, reviewText}}},
          {new: true}
        );
      }
      throw new AuthenticationError("You need to be logged in to update a review!");
    }
  },
};

module.exports = resolvers;
