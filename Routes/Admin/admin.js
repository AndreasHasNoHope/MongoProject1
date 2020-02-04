const express = require("express");
const route = express.Router();
const adminAuth = require('../../middlewares/adminAuth');

route.get("/", adminAuth, (req, res) => {
    res.json({
        success: true,
        message: 'Admin area'
    });
});

route.use("/auth", require("./auth"));
route.use("/users", require('./users'));
route.use("/products", adminAuth, require("./products"));
route.use("/categories", require("./categories"));
route.use('/departments', require('./departments'));
route.use('/photos', require('./photos'));


module.exports = route;
