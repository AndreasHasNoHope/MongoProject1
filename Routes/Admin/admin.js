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
route.get("/stats", adminAuth, async (req, res) => {
    const categories = await Category.find({}).exec();
    const labels = categories.map(c => c.title);
    const counts = [];
    for(let cat of categories) {
        const num =  await  Product.count({ category: cat._id});
        counts.push(num);
    }

    res.json({
        success: true,
        data: {
            labels: labels,
            datasets: [
                {
                    label: "My Categories",
                    data: counts
                }
            ]
        }
    });
});


route.use("/stats", adminAuth, StatsController);
route.use("/auth", require("./auth"));
route.use("/users", adminAuth, require('./users'));
route.use("/products", adminAuth, require("./products"));
route.use("/categories", adminAuth, require("./categories"));


module.exports = route;
