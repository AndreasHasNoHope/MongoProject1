const express = require('express');
const route = express.Router();
const CategoriesController = require('../../controllers/CategoriesController');
const ProductsController = require('../../controllers/ProductsController');


route.get("/", (req,res) => {
    res.send('works');
});

route.use('/auth', require('./auth'));
route.get('/categories', CategoriesController.list);
route.get('/categories/:categoryId', ProductsController.getProductByCategory);


module.exports = route;
