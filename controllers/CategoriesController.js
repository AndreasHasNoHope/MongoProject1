const list = async (req,res) => {
   const categories = await Category.find({}).exec();
      return  res.json({
          success: true,
          categories: categories
      });

};

const getOne = async (req,res) => {
   const category = await Category.findOne({_id: req.params.categoryId}).exec();
       return res.json({
           success: true,
           category: category
       });
};

const create = async (req,res) => {
    const category = new Category ({ title: req.body.title });
    await category.save().then(() => {
        res.json({
            success: true,
            message: "Category Created"
        });
    });
};


const deleteCategory = async (req, res) => {
   await Category.deleteOne({_id: req.params.categoryId}).exec();
      return  res.json({
          success: true,
          message: "category deleted" });
};

const update = async (req, res) => {
   await Category.updateOne({_id: req.params.categoryId},
       { title: req.body.title, })
       .exec();
        return  res.json({
            success: true,
            message: "Category updated"
        });
};


module.exports = {
    list,
    getOne,
    create,
    deleteCategory,
    update
};
