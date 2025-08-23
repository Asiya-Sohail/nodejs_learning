const express = require('express');
const path = require('path')

const contactRouter = express.Router()

const rootDir = require('../utils/pathUtils')

contactRouter.get("/contact-us",(req, res, next) => {
  console.log("Handling /contact-us for GET ", req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'contactForm.html'))
})

contactRouter.post("/contact-us",(req, res, next) => {
  console.log("Handling /contact-us for POST ", req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, 'views', 'contactAdded.html'))
})

module.exports = contactRouter