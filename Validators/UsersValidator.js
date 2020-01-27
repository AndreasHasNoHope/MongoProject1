const { check } = require('express-validator');
const checkErrors = require('./result');

const create = [
    check("email").isEmail(),
    check("password").isLength({ min: 3 }),
    check("firstName").isAlpha(),
    check("lastName").isAlpha(),
    checkErrors
];


const getOne = [
    check("userId")
        .isMongoId()
        .withMessage("The id given MUST be a valid MongoId"),
        checkErrors
];

module.exports = {
    create,
    getOne
};