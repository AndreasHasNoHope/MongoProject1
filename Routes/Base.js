const express = require("express");
const route = express.Router();

// Home Route
route.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Home Page"
    });
});
route.use("/admin", require("./admin/admin"));
route.use("/client", require("./client/client"));

route.get("/email", async (req, res) => {

    await Mail.sendMail({
        from: "DEVELOBIRD <test@develobird.gr>",
        to: "head123@gmail.com",
        subject: "Test email subject",
        html: "<h1>aloha friend</h1>"
    });

    res.json({
        success: true,
        message: "email send"
    });
});

route.post("/upload", upload.single("avatar"), (req, res) => {
    console.log(req.file.filename);
    res.json({
        success: true,
        message: "File uploaded"
    });
});

module.exports = route;
