const Home = require('../models/homes')

exports.getAddHome = (req, res, next)=>{
  res.render('./admin/add-home', {pageTitle : 'Add Home', currentPage : 'addHome'})
}

exports.postAddHome = (req, res, next)=>{
  const {houseName, price, location, rating, photoUrl} = req.body
  const home = new Home(houseName, price, location, rating, photoUrl)
  home.save()
  res.render('./admin/home-added', {pageTitle : 'Home Added', currentPage : 'HomeAdded'})
}

exports.editHome = (req, res, next) => {
  res.render('./admin/edit-home', {pageTitle : "Edit Home", currentPage : 'editHome'})
}

exports.hostHomeList = (req, res, next) => {
  // res.render('./admin/host-home-list', {pageTitle : "Host Home List", currentPage : 'hostHomeList'})
  Home.fetchAll(RegisteredHomes => {
    res.render('./admin/host-home-list', {RegisteredHomes : RegisteredHomes, pageTitle : 'Host Home List', currentPage : 'hostHomeList'})
  })
}
