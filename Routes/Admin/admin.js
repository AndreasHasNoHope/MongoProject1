const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Admin Area");
});

//Admin Routes
route.use("/users", require("./Users"));
route.use("/products", require("./Products"));
route.use("/categories", require("./Categories"));

module.exports = route;