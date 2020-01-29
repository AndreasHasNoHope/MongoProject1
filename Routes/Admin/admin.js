const express = require("express");
const route = express.Router();
const AdminAuth = require("../../middlewares/adminAuth");

route.get("/",  AdminAuth, (req, res) => {
    res.json({
        success: true,
        message:"Admin Area"
    });
});

//Admin Routes
route.use("/auth", require("./auth"));
route.use("/users", AdminAuth, require("./Users"));
route.use("/products", AdminAuth, require("./Products"));
route.use("/categories", AdminAuth, require("./Categories"));

module.exports = route;