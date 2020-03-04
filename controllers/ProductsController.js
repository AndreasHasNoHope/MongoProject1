const mongoose = require('mongoose');


const list = async (req,res) => {
   const products = await Product.find({}).populate("category").exec();
   res.json({
       success: true,
       //userName: req.user.firstName,
       products: products
   });

};

const listByCategory = async (req, res) => {
    const products = await Product.find({category: req.params.categoryId}).exec();
     res.json({
         success: true,
         products: products
     });
};

const listCart = async (req,res) => {
    const products = await Product.find({_id: req.body.productIds}, "title price photo").exec();
    return res.json({
        success: true,
        products: products
    });
};



const getOne = async (req,res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.productId)) {
        const product = await Product
            .findById(req.params.productId)
            .populate('category')
            .exec();
        return  res.json({
            success: true,
            product: product
        });
    } else {
        res.json( {
            success: false,
            message: 'product not found'
        });
    }

};

const create = async (req,res) => {
    const pro = new Product ({
        category: req.body.category,
        title: req.body.title,
        miniDescription: req.body.miniDescription,
        description: req.body.description,
        price : req.body.price,
        sale : req.body.sale,
        photo : req.body.photo
    });
    await pro.save();
       return  res.json({
           success: true,
           message: "Product Created"
       });
};
const deleteProduct = async (req, res) => {
    await Product.deleteOne({ _id:req.params.productId}).exec();
       res.json({
           success: true,
           message: "product deleted"
       });

};

const update =  async (req, res) => {

    await  Product.updateOne({ _id: req.params.productId },
        {
            category: req.body.category,
            title: req.body.title,
            miniDescription: req.body.miniDescription,
            description: req.body.description,
            price : req.body.price,
            sale : req.body.sale,
            photo : req.body.photo
        }).exec();

            res.json({
                success: true,
                message: "product updated" });

};

const getProductByCategory = async (req, res) => {
    const category = await Category.findById( req.params.categoryId ).exec();
    const product = await Product.find({category: req.params.categoryId}).exec();
     res.json({
         success: true,
         category: category,
         product: product
     });
}





module.exports = {
    list,
    getOne,
    create,
    deleteProduct,
    update,
    listByCategory,
    listCart,
    getProductByCategory
};
