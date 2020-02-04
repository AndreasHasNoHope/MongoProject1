const { check} = require('express-validator');
const checkErrors = require('./result');

const register = [
    check('firstName').isAlpha(),
    check('lastName').isAlpha(),
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    //check('passwordConfirm').equals('password'),
    checkErrors
];

const login = [
    check('email').isEmail().withMessage('Invalid value at email field'),
    check('password').isLength({ min: 6}).withMessage('Password must be at least 6 characters'),
    checkErrors
];


module.exports = {
    register,
    login

}
