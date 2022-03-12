const db = require("../config/connection");
const { Restaurant, Review, User } = require("../models");

const reviewSeeds = require("./reviewSeeds.json");
const restaurantSeeds = require("./restaurantSeeds.json");
const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
  // clean database
    try {
        await User.deleteMany({});
        await Restaurant.deleteMany({});
        await Review.deleteMany({});

        // bulk create each model
        await User.insertMany(userSeeds);
        const reviews = await Review.insertMany(reviewSeeds);
        const restaurants = await Restaurant.insertMany(restaurantSeeds);

        for (const rev of reviews) {
            // randomly add each Reviews to a Restaurant
            const tempRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
            console.log("line23", tempRestaurant)
            tempRestaurant.reviews.push(rev._id);
            console.log("line25", tempRestaurant.reviews.push(rev._id))
            await tempRestaurant.save();
            // console.log("ln 27", tempRestaurant.save())
        }
        
        // for (const rest of restaurants) {
        //     await rest.save();
        // }

        console.log("all done!");
        process.exit(0);
    }   catch (err) {
        throw err;  
    }
});
