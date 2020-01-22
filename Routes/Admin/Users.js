const express = require("express");
const UsersController = require("../../controllers/UsersController");
const route = express.Router();

// User Admin Routes
route.get("/", UsersController.list);
route.get("/:userId", UsersController.getOne);
route.post("/", UsersController.create);
route.delete("/:userId", UsersController.deleteUser);
route.put("/:userId", UsersController.update);

module.exports = route;