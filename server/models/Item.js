const { Schema } = require("mongoose");

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: "Please name the item.",
  },
  price: {
    type: Number,
    required: "Please input a price for the item.",
  },
  description: {
    type: String,
  },
});

module.exports = itemSchema;