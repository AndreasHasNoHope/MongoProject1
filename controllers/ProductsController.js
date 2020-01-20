const list = async (req,res) => {
   const products = await Product.find({})
        .populate("category")
        .exec();
    res.json(products);
};
const listCart = async (req,res) => {
    const products = await Product.find({_id: req.body.productIds},"title price photo")
        .populate("category")
        .exec();
    res.json(products);
};

const getOne = async (req,res) => {
    const products = await Product.findById(req.params.productId)
        .populate("category")
        .exec();
    res.json(products);
};

const create = async (req, res) =>{
    const p = new Product({
        category: req.body.category,
        title: req.body.title,
        miniDesc: req.body.miniDesc,
        desc: req.body.desc,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.body.photo
    });
    await p.save();
        res.json({
            message: "Product Created"
        })
};
const deleteProduct = async (req,res) => {
    await Product
        .deleteOne({_id: req.params.productId})
        .exec();
    res.json({message: "Product Deleted"});
};

const update = async (req,res) => {
   await Product.updateOne({_id: req.params.productId}, {
        category: req.body.category,
        title: req.body.title,
        miniDesc: req.body.miniDesc,
        desc: req.body.desc,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.body.photo
        }).exec();
    res.json({
        message: "Product Updated"
    });
};

const listByCategory = async (req,res) => {
   const products = await Product
       .find({Category: req.params.categoryId})
       .exec();
        res.json(products);
};


module.exports = {
    list,
    listCart,
    getOne,
    create,
    deleteProduct,
    update,
    listByCategory

};

