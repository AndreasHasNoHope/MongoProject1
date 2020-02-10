const express = require("express");
const route = express.Router();
const adminAuth = require('../../middlewares/adminAuth');
const StatsController = require('../../controllers/StatsController');

route.get("/", adminAuth, (req, res) => {
    res.json({
        success: true,
        message: 'Admin area'
    });
});


route.use("/stats", adminAuth, StatsController);
route.use("/auth", require("./auth"));
route.use("/users", adminAuth, require('./users'));
route.use("/products", adminAuth, require("./products"));
route.use("/categories", adminAuth, require("./categories"));


module.exports = route;
