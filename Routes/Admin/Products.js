const express = require('express');
const ProductsController = require('../../controllers/ProductsController');
const route = express.Router(); //apo tin vivliothiki express xrismopoioume mono to router

route.post("/cart", ProductsController.listCart);
route.get("/", ProductsController.list);
route.get("/:productId", ProductsController.getOne);
route.post("/", ProductsController.create );
route.delete("/:productId", ProductsController.deleteProduct );
route.put("/:productId", ProductsController.update );
route.get("/category/:categoryId",ProductsController.listByCategory);



module.exports = route;

