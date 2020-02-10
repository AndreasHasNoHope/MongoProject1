const express = require("express");
const route = express.Router();
const AuthController = require("../../controllers/AuthController");
const AuthValidator = require("../../validators/AuthValidator");
const adminAuth = require('../../middlewares/adminAuth');


route.post("/login", AuthValidator.login, AuthController.adminLogin);
route.get("/check", AuthController.checkToken, adminAuth);

module.exports = route;
