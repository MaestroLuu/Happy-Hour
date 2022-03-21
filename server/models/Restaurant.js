const { Schema, model } = require("mongoose");
const itemSchema = require("./Item");

const restaurantSchema = new Schema (
{
    restaurantName: {
        type: String,
        required: "You need a restaurant name.",
        unique: true,
    },
    happyHours: {
        type: String,
        require: true,
    },
    items: [itemSchema],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
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