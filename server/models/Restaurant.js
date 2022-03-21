const { Schema, model } = require("mongoose");
const itemSchema = require("./Item");
const locationSchema = require("./Location");

const restaurantSchema = new Schema(
  {
    restaurantName: {
      type: String,
      required: "You need a restaurant name.",
      unique: true,
    },
    phoneNumber: {
      type: Number,
      unique: true,
      minlength: 10,
      maxlength: 11,
      match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Must a valid phonenumber!"],
    },
    webpage: {
      type: String,
    },
    location: [locationSchema],
    happyHours: {
      type: String,
      require: true,
    },
    items: [itemSchema],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
