const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

global.User = mongoose.model("User",{
    firstName: String,
    lastName: String,
    email: String
});

global.Product = mongoose.model("Product",{
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    title: String,
    miniDesc: String,
    desc: String,
    price: Number,
    sale: Number,
    photo: String

});
global.Category = mongoose.model("Category",{
    title: String,
});


