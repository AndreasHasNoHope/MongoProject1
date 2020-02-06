const express = require("express");
const route = express.Router();
const adminAuth = require('../../middlewares/adminAuth');

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

route.use("/auth", require("./auth"));
route.use("/users", require('./users'));
route.use("/products", adminAuth, require("./products"));
route.use("/categories", require("./categories"));
route.use('/departments', require('./departments'));
route.use('/photos', require('./photos'));


module.exports = route;
