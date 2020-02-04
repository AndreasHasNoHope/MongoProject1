
const list = async (req, res)=> {
   const departments = await Department.find({}).exec();
        res.json(departments);

};

const create = async (req,res) => {
    const d = new Department ({
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });
    await d.save();
        res.json({ message:"department created" });

}

const getOne = async  (req, res) => {
     const department = await Department.findById(req.params.departmentId).exec();
        res.json(department);
}

const deleteDep = async (req, res) => {
    await Department.deleteOne({_id: req.params.departmentId}).exec();
        res.json({ message:"department deleted" });

}
const updateDepartment = async (req, res) => {
    await Department.updateOne({_id: req.params.departmentId}, {
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }).exec();

        res.json({ message: "department updated" });
}


module.exports = {
    list,
    create,
    getOne,
    deleteDep,
    updateDepartment
}

