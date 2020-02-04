const { validationResult } = require('express-validator');
// check validator
const checkErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            success: false,
            errors: errors.array()
        });
    }
    next();
};

module.exports = checkErrors;
