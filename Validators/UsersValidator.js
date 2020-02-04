const { check} = require('express-validator');
const checkErrors = require('./result');

 const create = [
     check('firstName').isAlpha(),
     check('lastName').isAlpha(),
     check('email').isEmail(),
     check('password').isLength({ min: 6 }),
     check('role').isAlpha(),
     checkErrors
];

 const getOne = [
     check('userId').isMongoId().withMessage('You have to provide a valid mongo id'),
     checkErrors
 ];


 module.exports = {
     create,
     getOne
}
