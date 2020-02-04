const list = async (req,res) => {
   const category = await Category.find({}).exec();
      return  res.json(category);

};

const getOne = async (req,res) => {
   const category = await Category.findOne({_id: req.params.categoryId}).exec();
       return res.json(category);
};

const create = async (req,res) => {
    const category = new Category ({ title: req.body.title });
    await category.save().then(() => {
        res.json({ message: "Category Created" });
    });
};


const deleteCategory = async (req, res) => {
   await Category.deleteOne({_id: req.params.categoryId}).exec();
      return  res.json({ message: "category deleted" });
};

const update = async (req, res) => {
   await Category.updateOne({_id: req.params.categoryId},
       { title: req.body.title, })
       .exec();
        return  res.json({ message: "Category updated" });
};


module.exports = {
    list,
    getOne,
    create,
    deleteCategory,
    update
};
