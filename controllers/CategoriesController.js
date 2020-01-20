const list = async (req,res) => {
    const categories = await Category
        .find({})
        .exec();
        res.json(categories);
};

const getOne = (req,res) => {
    Category.findById(req.params.categoryId, (err, categories) => {
        res.json(categories);
    });
};

const create = async (req, res) =>{
    const c = new Category ({
        title: req.body.title,
    });
    await c.save();
        res.json({
            message: "Category Created"
        })

};
const deleteCategory = (req,res) => {
    Category.deleteOne({_id: req.params.categoryId}, (err) => {
        res.json({
            message: "Category Deleted"
        });
    });
};

const update = (req,res) => {
    Category.updateOne({_id: req.params.categoryId}, {
        title: req.body.title,
    }, (err) => {
        res.json({
            message: "Category Updated"
        });
    });
};

module.exports = {
    list,
    getOne,
    create,
    deleteCategory,
    update

};