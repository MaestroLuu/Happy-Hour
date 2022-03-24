const { Schema, model } = require("mongoose");
const itemSchema = require("./Item");

const restaurantSchema = new Schema(
  {
    restaurantName: {
      type: String,
      required: "You need a restaurant name.",
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    webpage: {
      type: String,
    },
    restaurantImg: {
      type: String,
    },
    address: {
      type: String,
      required: "Please name the location.",
    },
    city: {
      type: String,
      required: "Please input a city for the location.",
    },
    zipCode: {
      type: Number,
      required: "You need a valid zipcode.",
      minlength: 5,
      maxlength: 5,
    },
    // This will be a drop down menu on the form with 50 states to choose from
    state: {
      type: String,
    },
    // Drop down menu with only "United States for now"
    country: {
      type: String,
    },
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
