const path = require('path')

const express = require('express');
const userRouter = require('./routes/userRouter')
const {hostRouter} = require('./routes/hostRouter')
const rootDir = require('./utils/pathUtils')

const app = express();
const ErrorsController = require('./controllers/errors')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, "public")))

// bodyparser not needed
app.use(express.urlencoded());

app.use(userRouter)
app.use("/host", hostRouter)

// 404 Controller
app.use(ErrorsController.Page_Not_Found)

const PORT = 3000
app.listen(PORT, ()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
})