const { Schema, model } = require("mongoose");
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
            required: "You need and address.",
        },
        zipcode: {
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
        items: [
            {
                name: {
                    type: String,
                    required: "Please name the item.",
                },
                price: {
                    type: Number,
                    required: "Please input a price for the item."
                },
                description: {
                    type: String,
                },
            }
        ],
        reviews: [reviewSchema],
    }
    {
        toJSON: {
          virtuals: true,
        },
    }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;