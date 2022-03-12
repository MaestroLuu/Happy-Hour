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
    restaurant: async (parent, args) => {
      console.log(args)
      if (!args) {
        return Restaurant.find({});
      } 
      return Restaurant.findById(args.id);
      console.log(Restaurant.findById(args.id))
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
        return await User.findByIdAndUpdate(
          {_id: context.user._id},
          { $push: {favoriteRestaurants: {restaurantId}}},
          {new: true}
        );
      }
      throw new AuthenticationError("You need to be logged in to favorite a restaurant!");
    },
    removeFavoriteRestaurant: async (parent, {restaurantId}, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { favoriteRestaurants: { restaurantId } } },
          {
            new: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in to unfavorite your restaurants!");
    },
    addReview: async (parent, {reviewText}, context) => {
      if (context.restaurant) {
        const newReview = await Review.create({
          reviewText,
          reviewAuthor: context.user.username,
        });

        await Restaurant.findbyIdAndUpdate(
          {_id: context.restaurant._id},
          { $addToSet: {reviews: review._id}},
          {new: true}
        );

      }
      throw new AuthenticationError("You need to be logged in to add a review!");
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
