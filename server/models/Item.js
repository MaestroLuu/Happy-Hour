const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {
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

const Item = model("Item", itemSchema);

module.exports = Item;