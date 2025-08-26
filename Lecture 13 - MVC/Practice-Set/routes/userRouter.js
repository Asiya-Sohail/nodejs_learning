// External Module
const express = require('express');

const HomesController = require('../controllers/homes')

const userRouter = express.Router()

// app is only one 
userRouter.get("/",HomesController.getHomes )

module.exports = userRouter