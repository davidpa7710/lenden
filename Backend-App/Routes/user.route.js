const express = require("express")
const userController = require("../Controllers/user.controller.js")
const createUserValidator = require("../middlewares/createUserValidator.js")

const router = express.Router();

router.post('/', createUserValidator, userController.create);

module.exports = router
