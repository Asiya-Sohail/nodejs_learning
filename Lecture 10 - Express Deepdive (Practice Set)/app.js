// External Module
const express = require('express')

// Core Module
const path = require('path')

// Local Modules
const contactRouter = require('./routes/contactRouter')
const userRouter = require('./routes/userRouter')
const rootDir = require('./utils/pathUtils')

const app = express();

app.use(express.urlencoded());

app.use(userRouter)

app.use(contactRouter)

// fallback middleware (for 404 page)
app.use((req, res, next)=>{
  console.log("404 page", req.url, req.method);
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})