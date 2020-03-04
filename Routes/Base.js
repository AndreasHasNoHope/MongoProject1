const express = require('express');
const route = express.Router();



route.get("/", ( req, res ) => {
    res.json({
        success: true,
        message: 'Home page'
    });
});

route.use('/admin', require('./admin/admin'));
route.use('/client', require('./client/client'));


route.use((req , res)=> {
    return res.json({
        success: false,
        message: 'Page not found'
    });
});

module.exports = route;
