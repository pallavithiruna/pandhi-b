const express=require('express')
const parser = require("body-parser");
const RestaurantRouter=require('./Controllers/Restaurants.controller')
const bodyParser = require("body-parser");
const FoodRouter = require('./Controllers/Food.controller');
const CartRouter = require('./Controllers/Cart.controller');
const APP_SERVER=express()



/**
 * INJECTING DATABASE SESSION
 */

require('./dbconfig')

/**
 * REGISTERING MIDDLEWARES
 */
APP_SERVER.use(bodyParser.urlencoded({ extended: true }));
APP_SERVER.use(bodyParser.json());


// registering the controllers

APP_SERVER.use("/api/restaurants",RestaurantRouter)

APP_SERVER.use("/api/food",FoodRouter)

APP_SERVER.use("/api/cart",CartRouter)

module.exports=APP_SERVER;