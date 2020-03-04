const express = require("express");
const route = express.Router();
const adminAuth = require('../../middlewares/adminAuth');
const statsController = require('../../controllers/statsController')


route.get("/", adminAuth, (req, res) => {

    res.json({
        success: true,
        message: 'Admin area'
    });
});
route.get("/stats", adminAuth, statsController.dashboardStats );

route.use("/auth", require("./auth"));
route.use("/users", adminAuth, require('./users'));
route.use("/products", adminAuth, require("./products"));
route.use("/categories", adminAuth ,require("./categories"));


module.exports = route;
