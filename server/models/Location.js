const { Schema } = require("mongoose");

const locationSchema = new Schema({
  address: {
    type: String,
    required: "Please name the location.",
  },
  city: {
    type: Number,
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
    required: "Please input a valid country",
  },
});

module.exports = locationSchema;
