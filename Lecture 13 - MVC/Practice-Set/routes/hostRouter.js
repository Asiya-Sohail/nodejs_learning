const express = require('express');

const adminController = require('../controllers/admin')

const hostRouter = express.Router()

hostRouter.get("/add-home", adminController.getAddHome )

hostRouter.post("/add-home", adminController.postAddHome)

hostRouter.get("/edit-home", adminController.editHome)

hostRouter.get("/host-home-list", adminController.hostHomeList)


exports.hostRouter = hostRouter