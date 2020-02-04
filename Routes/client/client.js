const express = require('express');
const route = express.Router();

route.get("/", (req,res) => {
    res.send('works');
});

route.use('/auth', require('./auth'));

module.exports = route;
