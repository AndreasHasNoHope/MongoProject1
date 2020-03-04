

const list =  async (req,res) => {
   const users = await User.find({}).exec();
       return res.json({
           success: true,
           users: users
       });
};

const getOne =  async (req,res) => {
   const user = await User.findOne({_id: req.params.userId}).exec();
         return res.json({
             success: true,
             user: user
         });

};

const create = (req, res) => {

    const u = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
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
const deleteUser = async (req, res) => {
     await User.deleteOne({_id: req.params.userId}).exec();
         return res.json({
             success: true,
             message: "user deleted"
         });
};

const update = async (req, res) => {
   await User.updateOne({_id: req.params.userId},
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role

        })
        .exec();
        return res.json({
            success: true,
            message: "user updated"
        });

};







module.exports = {
    list,
    getOne,
    create,
    deleteUser,
    update
};
