const Home = require('../models/homes')

exports.getAddHome = (req, res, next)=>{
  res.render('addHome', {pageTitle : 'Add Home', currentPage : 'addHome'})
    // res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
}

exports.postAddHome = (req, res, next)=>{
  // console.log("Home registration successful for : ", req.body);
  const {housName, price, location, rating, photoUrl} = req.body
  // const home = new Home(req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoUrl)
  // destructure
  const home = new Home(housName, price, location, rating, photoUrl)
  home.save()

  // RegisteredHomes.push(req.body)
  res.render('homeAdded', {pageTitle : 'Home Successfully added', currentPage : 'HomeAdded'})
}

exports.getHomes = (req, res, next)=>{
  Home.fetchAll(RegisteredHomes => {
    res.render('home', {RegisteredHomes : RegisteredHomes, pageTitle : 'airbnb Home', currentPage : 'Home'})
  })
  // console.log(RegisteredHomes)
  
}

// exports.RegisteredHomes = RegisteredHomes
