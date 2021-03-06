const jwt = require('jsonwebtoken');

const adminLogin = async (req, res) => {
    const user = await User
        .findOne({
            email: req.body.email,
            role: "admin"
        })
        .exec();

    // If there is no user with this email
    if(user === null) {
        return res.json({
            success: false,
            message: "Wrong credentials"
        });
    }

    if (user.verifyPasswordSync(req.body.password)) {
        // Success login
        // Create Token
        const token = jwt.sign(
            {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        return res.json({
            success: true,
            token: token,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } else {
        // login failed
        return res.json({
            success: false,
            message: "Wrong credentials"
        });
    }
};

const login = async (req , res) => {
    const user = await User
        .findOne({email: req.body.email})
        .exec();

    // if there is no user with this email
    if( user === null ) {
        return res.json({
            success: false,
            message: 'Wrong credentials'
        });
    }
    if (user.verifyPasswordSync(req.body.password)) {
        // Success login
        // Create token
        const token = jwt.sign({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_SECRET_EXPIRES_IN });

        return res.json({
            success: true,
            token: token,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }

        });
    } else {
        // Login failed
        return res.json({
            success: false,
            message: 'Wrong credentials - wrong password'
        });
    }
}



const register = async (req , res) => {

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    await user.save()
        .then(() => {
            res.json({
                success: true,
                message: "User created"
            });
        })
        .catch((err) => {
            res.json({
                success: false,
                message: "User Not created"
            });
        });
}


const checkToken = (req, res ) => {
    res.json({
        success: true,
        user: {
            _id: req.user._id,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email: req.user.email
        }
    });
}

module.exports = {
    login,
    register,
    adminLogin,
    checkToken
}
