const jwt = require('jsonwebtoken');

const AdminAuth = async (req, res, next) => {
    if (!req.headers.authorization) {
            return res.json({
                success: false,
                message: "Authorization header required"
            });
    }

    const token = req.headers.authorization.replace("Bearer ", "");
    let decodedUser;

    try {
        const decodedUser = jwt.verify(token, procces.env.JTW_SECRET);
    } catch (err) {
        return res.json({
            success: false,
            message: "JTW Error"
        });
    }


       const user = await User
           .findById(decodedUser._id)
           .exec();

       if (!user || user.role != "admin"){
           return res.json({
               success: false,
               message: "Access Denied"
           });
       }

};
module.exports = AdminAuth;