// COre Modules
const path = require('path')

// Local Module
const rootDir = require('../utils/pathUtils')

// External Module
const express = require('express');
const userRouter = express.Router()

// app is only one 
userRouter.get("/", (req, res, next)=>{
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = userRouter