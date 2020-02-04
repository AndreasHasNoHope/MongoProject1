const express = require('express');
const UsersController = require("../../controllers/UsersController");
const route = express.Router(); //apo tin vivliothiki express xrismopoioume mono to router
const UserValidator = require('../../validators/UsersValidator');

route.get("/", UsersController.list);
route.get("/:userId", UserValidator.getOne, UsersController.getOne);
route.post("/", UserValidator.create , UsersController.create );

route.delete("/:userId", UsersController.deleteUser );
route.put("/:userId", UsersController.update );

module.exports = route;
