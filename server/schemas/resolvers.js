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
      return User.findOne({ email: context.user.email }).populate(
        "favoriteRestaurants"
      );
    },
    restaurants: async (parent, args) => {
      return Restaurant.find({}).populate("reviews");
    },
    restaurantsByZipcode: async (parent, args) => {
      return Restaurant.find({ zipCode: args.zipCode }).populate("reviews");
    },
    restaurant: async (parent, args) => {
      if (!args) {
        throw new AuthenticationError("Please provide an ID");
      }
      return Restaurant.findById(args.id).populate("reviews");
    },
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
    addFavoriteRestaurant: async (parent, { restaurantId }, context) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { favoriteRestaurants: restaurantId } }
        ).populate("favoriteRestaurants");
      }
      throw new AuthenticationError(
        "You need to be logged in to favorite a restaurant!"
      );
    },
    removeFavoriteRestaurant: async (parent, { restaurantId }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { favoriteRestaurants: restaurantId } }
        ).populate("favoriteRestaurants");
      }
      throw new AuthenticationError(
        "You need to be logged in to unfavorite your restaurants!"
      );
    },
    addReview: async (parent, { restaurantId, reviewText }, context) => {
      if (context.user) {
        const data = await Review.create({
          reviewText,
          reviewAuthor: context.user.username,
        });

        const newReview = await Restaurant.findOneAndUpdate(
          { _id: restaurantId },
          { $addToSet: { reviews: data._id } },
          { new: true }
        ).populate("reviews");

        return newReview;
      }
      throw new AuthenticationError(
        "You need to be logged in to add a review!"
      );
    },
    deleteReview: async (parent, { restaurantId, reviewId }, context) => {
      if (context.user) {
        const data = await Review.findOneAndDelete({
          _id: reviewId,
          reviewAuthor: context.user.username,
        });

        const deletedReview = await Restaurant.findOneAndUpdate(
          { _id: restaurantId },
          { $pull: { reviews: data._id } }
        ).populate("reviews");

        return deletedReview;
      }
      throw new AuthenticationError(
        "You need to be logged in to delete your review!"
      );
    },
    updateReview: async (
      parent,
      { restaurantId, reviewId, reviewText },
      context
    ) => {
      if (context.user) {
        await Review.findByIdAndUpdate(
          { _id: reviewId },
          { reviewText },
          { new: true }
        );

        return await Restaurant.findById(restaurantId).populate("reviews");
      }
      throw new AuthenticationError(
        "You need to be logged in to update a review!"
      );
    },
  },
};

module.exports = resolvers;
