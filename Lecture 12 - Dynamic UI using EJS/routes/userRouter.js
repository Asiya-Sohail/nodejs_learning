// COre Modules
const path = require('path')

// Local Module
const rootDir = require('../utils/pathUtils')

// External Module
const express = require('express');
const { RegisteredHomes } = require('./hostRouter');
const userRouter = express.Router()

// app is only one 
userRouter.get("/", (req, res, next)=>{
  console.log(RegisteredHomes)
  res.render('home', {RegisteredHomes : RegisteredHomes, pageTitle : 'airbnb Home', currentPage : 'Home'})
})

module.exports = userRouter