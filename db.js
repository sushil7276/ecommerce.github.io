const mongoose = require("mongoose");
const mongoURL = "mongodb://3.86.214.84:27017/e_commerce"

// Connect to mongo
mongoose.set("strictQuery", false);
const connectToMongo = () => {
    mongoose.connect(mongoURL, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;