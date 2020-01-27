const express = require("express");
const UsersController = require("../../controllers/UsersController");
const route = express.Router();

// Imports
const userVal = require("../../Validators/UsersValidator");


// User Admin Routes
route.get("/", UsersController.list);
route.get("/:userId", userVal.getOne, UsersController.getOne);
route.post("/", userVal.create, UsersController.create);
route.delete("/:userId", UsersController.deleteUser);
route.put("/:userId", UsersController.update);

module.exports = route;