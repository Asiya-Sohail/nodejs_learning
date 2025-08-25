const express = require('express');

const homesController = require('../controllers/homes')

const hostRouter = express.Router()

hostRouter.get("/add-home", homesController.getAddHome )

const RegisteredHomes = []

hostRouter.post("/add-home", (req, res, next)=>{
  console.log("Home registration successful for : ", req.body);
  RegisteredHomes.push(req.body)
  res.render('homeAdded', {pageTitle : 'Home Successfully added', currentPage : 'HomeAdded'})
})


exports.hostRouter = hostRouter
exports.RegisteredHomes = RegisteredHomes