const express = require("express");
const route = express.Router();
const AuthController = require("../../controllers/AuthController");
const AuthVal = require("../../Validators/AuthVal");

route.post("/login",AuthVal.login, AuthController.adminLogin);

module.exports = route;
