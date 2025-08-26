const path = require('path')
const rootDir = require('../utils/pathUtils')

const express = require('express');
const hostRouter = express.Router()

hostRouter.get("/add-home", (req, res, next)=>{
  res.render('addHome', {pageTitle : 'Add Home', currentPage : 'addHome'})
    // res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
})

const RegisteredHomes = []

hostRouter.post("/add-home", (req, res, next)=>{
  console.log("Home registration successful for : ", req.body);
  // RegisteredHomes.push({
  //   houseName : req.body.houseName,
  //   price_per_night: req.body.price_per_night,
  //   location: req.body.location,
  //   rating: req.body.rating,
  //   photoLink: req.body.photoLink
  // })
  RegisteredHomes.push(req.body)
  res.render('homeAdded', {pageTitle : 'Home Successfully added', currentPage : 'HomeAdded'})
    // res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'))
})


exports.hostRouter = hostRouter
exports.RegisteredHomes = RegisteredHomes