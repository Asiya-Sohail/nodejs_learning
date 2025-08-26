// External Module
const express = require('express');

const storeController = require('../controllers/store')

const userRouter = express.Router()

// app is only one 
userRouter.get("/",storeController.getIndex)
userRouter.get("/homes",storeController.getHomeList)
userRouter.get("/homeDetail", storeController.getHomeDetail)
userRouter.get("/favouriteList", storeController.getFavouriteList)
userRouter.get("/reserve", storeController.reserve)
userRouter.get("/booking", storeController.getBookings)

module.exports = userRouter