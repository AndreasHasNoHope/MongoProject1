const mongoose = require('mongoose');
const bcrypt = require('mongoose-bcrypt');

// kanoume sindesi sthn vasi
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
////////////// Collection User ///////////////

const userSchema = mongoose.Schema({
    firstName: {
        type : String ,
        required : true
    } ,
    lastName: {
        type : String ,
        required: true
    },
    password: {
        type: String ,
        required: true ,
        bcrypt: true
    },
    email: {
        type : String ,
        required: true,
        unique: true
    } ,
    role: {
        type: String,
        required: true,
        default : "client",
        enum: ["client", "admin", "superUser"]
    }
},
    {
    timestamps: true
    }
);
userSchema.plugin(bcrypt);
global.User = mongoose.model("User", userSchema);


////////////// Collection Product ///////////////
const productSchema = mongoose.Schema({
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    miniDescription: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sale: {
        type: Number
    },
    photo: {
        type: String,
        required: true
    },

}, {
    timestamps: true
    }
);

global.Product = mongoose.model("Product", productSchema);
////////////// Collection Category ///////////////
const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
} , {
    timestamps: true
});
global.Category = mongoose.model("Category", categorySchema);
////////////// Collection Department  ///////////////
const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
},  {
    timestamps: true
});
global.Department = mongoose.model("Department", departmentSchema);

////////////// Collection Photo ///////////////
const photoSchema = mongoose.Schema({
    url : {
        type: String,
        required: true
    },
    sort: {
        type: String
    }
}, {
    timestamps: true
});
global.Photo = mongoose.model("Photo", photoSchema);
