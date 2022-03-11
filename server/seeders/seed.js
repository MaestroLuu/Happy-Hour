const db = require("../config/connection");
const { Item, Restaurant, Review, User} = require("../models");
const reviewSeeds = require("./reviewSeeds.json");
const restaurantSeeds = require("./restaurantSeeds.json");
const itemSeeds = require("./itemSeeds.json");
const userSeeds = require("./userSeeds.json");