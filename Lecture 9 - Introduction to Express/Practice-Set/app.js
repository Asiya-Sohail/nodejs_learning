const express = require('express')
const fs = require('fs')

const app = express();

app.use((req, res, next)=>{
  console.log("First Middleware ", req.url, req.method);
  next();
})

app.use((req, res, next)=>{
  console.log("Second Middleware ", req.url, req.method);
  next();
})

app.get("/",(req, res, next) => {
  res.send(`
    <h1>Welcome to Home Page</h1>
    <a href='/contact-us'>Visit Contact Page</a>
    `)
})

app.get("/contact-us",(req, res, next) => {
  console.log("Handling /contact-us for GET ", req.url, req.method);
  res.send(`
    <h1>Welcome to Contact Page</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" id="name" placeholder="Enter your name"/> <br />
      <input type="email" name="email" id="email" placeholder="Enter your email"/>
      <input type="submit" value="submit"/>
    </form>
    `)
})

app.post("/contact-us",(req, res, next) => {
  console.log("Handling /contact-us for POST ", req.url, req.method);
  res.send("<h1>We will Contact you shortly</h1>")
})

// fallback middleware (for routes not matched above)
app.use((req, res, next)=>{
  console.log("Third Middleware ", req.url, req.method);
  res.send("<h1>I'm third Middleware</h1>")
})


PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})