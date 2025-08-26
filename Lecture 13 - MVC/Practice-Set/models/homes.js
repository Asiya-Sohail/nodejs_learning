// Core Modules
const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtils')

// // Fake Database
// const RegisteredHomes = []

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName
    this.price = price
    this.location = location
    this.rating = rating
    this.photoUrl = photoUrl
  }

  save() {
    Home.fetchAll(RegisteredHomes => {
      RegisteredHomes.push(this);
      const HomeDataPath = path.join(rootDir, 'data', 'homes.json');
      fs.writeFile(HomeDataPath, JSON.stringify(RegisteredHomes), err => {
        console.log("File written successfully");
      })
    })
    // RegisteredHomes.push(this);
    // const HomeDataPath = path.join(rootDir, 'data', 'homes.json');
    // fs.writeFile(HomeDataPath, JSON.stringify(RegisteredHomes), err => {
    //   console.log("File written successfully");
    // })
  }

  static fetchAll(callback) {
    const HomeDataPath = path.join(rootDir, 'data', 'homes.json');
    fs.readFile(HomeDataPath, (err, data)=> {
      // console.log("File read : ", err, data);
      // USing Smart way
      callback(!err ? JSON.parse(data) : [])

      // if (!err) {
      //   callback(JSON.parse(data));
      // } else {
      //   callback([]);
      // }
    // Error because of 2 headers set
    // callback([]);
    })
  }
}