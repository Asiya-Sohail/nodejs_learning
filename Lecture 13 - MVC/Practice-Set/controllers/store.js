const Home = require('../models/homes')

exports.getIndex = (req, res, next)=>{
  Home.fetchAll(RegisteredHomes => {
    res.render('./store/index', {RegisteredHomes : RegisteredHomes, pageTitle : 'airbnb Home', currentPage : 'index'})
  })  
}

exports.getHomeList = (req, res, next)=>{
  Home.fetchAll(RegisteredHomes => {
    res.render('./store/home-list', {RegisteredHomes : RegisteredHomes, pageTitle : 'Home List', currentPage : 'homesList'})
  })  
}

exports.getHomeDetail = (req, res, next) => {
  res.render('./store/home-detail', {pageTitle : "Home Detail", currentPage : 'homeDetail'})
}

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll(RegisteredHomes => {
    res.render('./store/favourite-list', {RegisteredHomes : RegisteredHomes, pageTitle : 'Favourite List', currentPage : 'favouriteList'})
  })  
}

exports.reserve = (req, res, next) => {
  res.render('./store/reserve', {pageTitle : "Reserve", currentPage : 'reserve'})
}

exports.getBookings = (req, res, next) => {
  res.render('./store/booking', {pageTitle : "Booking", currentPage : 'booking'})
}


