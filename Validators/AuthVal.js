const { check } = require('express-validator');
const checkErrors = require('./result');

const login = [
    check("firstName").isAlpha(),
    check("lastName").isLength({min: 3})
];
const register = [
    check("email").isEmail(),
    check("password").isLength({ min: 3 }),
    //check("passwordConfirm").equals(),
    check("firstName").isAlpha(),
    check("lastName").isAlpha(),
    checkErrors
];


module.exports = {
    register,
    login
};