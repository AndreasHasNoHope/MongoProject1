const express = require('express');
const PhotosController = require("../../controllers/PhotosController");
const route = express.Router();

route.get("/", PhotosController.list);
route.post("/", PhotosController.createPhoto);
route.delete("/:photoId", PhotosController.deletePhoto);
route.get("/:photoId", PhotosController.getOne);
route.put("/:photoId", PhotosController.updatePhoto);


module.exports = route;
