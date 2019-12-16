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
