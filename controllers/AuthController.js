const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const user = await User
        .findOne({email: req.body.email},
            "firstName lastName")
        .exec();
    // If there is no user with this email
    if(user === null) {
        return res.json({
            success: false,
            message: "Wrong credentials"
        });
    }
    if (user.verifyPasswordSync(req.body.password)) {
        // Success login & Create Token
        const token = jwt.sign({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        }, proccess.env.JTW_SECRET,
            {expiresIn: proccess.env.JTW_SECRET });

        return res.json({
            success: true,
            token: token,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
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

const register = async (req, res) => {
    const u = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    u.save()
        .then(() => {
            res.json({
                success: true,
                message: "User created"
            });
        })
        .catch((err) => {
            res.json({
                success: false,
                message: "User Not created",
                error: err
            });
        });
};

const adminlogin = async (req, res) => {
    const user = await User
        .findOne({
                email: req.body.email,
                type: admin
            },
            "firstName lastName")
        .exec();
    // If there is no user with this email
    if(user === null) {
        return res.json({
            success: false,
            message: "Wrong credentials"
        });
    }
    if (user.verifyPasswordSync(req.body.password)) {
        // Success login & Create Token
        const token = jwt.sign({
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            }, proccess.env.JTW_SECRET,
            {expiresIn: proccess.env.JTW_SECRET });

        return res.json({
            success: true,
            token: token,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
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


module.exports = {
    login,
    register,
    adminlogin
};