const { Schema, model } = require("mongoose");
const reviewSchema = require("./Review");
const itemSchema = require("./Item");

const restaurantSchema = new Schema (
{
    restaurantName: {
        type: String,
        required: "You need a restaurant name.",
        unique: true,
    },
    address: {
        type: String,
        required: "You need an address.",
    },
    zipCode: {
        type: Number,
        required: "You need a valid zipcode.",
        minlength: 5,
        maxlength: 5,
    },
    drinkSpecial: {
        type: Boolean,
        required: true,
    },
    foodSpecial: {
        type: Boolean,
        required: true,
    },
    foodType: {
        type: String,
        require: true,
    },
    happyHours: {
        type: String,
        require: true,
    },
    items: [itemSchema],
    reviews: [reviewSchema],
},
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;