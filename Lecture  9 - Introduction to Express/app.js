// Core Modules
// const http = require('http');

// External Modules
const express = require('express')

// Local Modules
// const userRequestHandler = require('./user');


const app = express();

app.get("/",(req, res, next) => {
  console.log("Came in first Middleware", req.url, req.method);
  // res.send("<h1>Came in first middleware</h1>");
  next();
})

app.post("/submit-details",(req, res, next) => {
  console.log("Came in second Middleware", req.url, req.method);
  res.send("<h1>Welcome</h1>")
})

app.use("/",(req, res, next) => {
  console.log("Came in another Middleware", req.url, req.method);
  res.send("<h1>Came in another middleware</h1>")
})



const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})