const express = require("express");
const route = express.Router();
const AuthController = require("../../controllers/AuthController");
const AuthVal = require("../../Validators/AuthVal");

route.post("/login",AuthVal.login, AuthController.login);
route.post("/register",AuthVal.register, AuthController.register);

module.exports = route;