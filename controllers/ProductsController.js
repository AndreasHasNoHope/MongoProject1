const list = (req,res) => {
    Product.find({}, (err, products) => {
        res.json(products);
    });
};

const getOne = (req,res) => {
    Product.findById(req.params.productId, (err, products) => {
        res.json(products);
    });
};

const create = (req, res) =>{
    const p = new Product({
        category: req.body.category,
        title: req.body.title,
        miniDesc: req.body.miniDesc,
        desc: req.body.desc,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.body.photo
    });
    p.save().then(() => {
        res.json({
            message: "Product Created"
        })
    });
};
const deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.productId}, (err) => {
        res.json({
            message: "Product Deleted"
        });
    });
};

const update = (req,res) => {
    Product.updateOne({_id: req.params.productId}, {
        category: req.body.category,
        title: req.body.title,
        miniDesc: req.body.miniDesc,
        desc: req.body.desc,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.body.photo
    }, (err) => {
        res.json({
            message: "Product Updated"
        });
    });
};

const listByCategory = (req,res) => {
    Product.find({Category: req.params.categoryId}, (err, products) => {
        res.json(products);
    });
};


module.exports = {
    list,
    getOne,
    create,
    deleteProduct,
    update,
    listByCategory

};