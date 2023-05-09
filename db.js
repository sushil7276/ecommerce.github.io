const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/e_commerce"

// Connect to mongo
mongoose.set("strictQuery", false);
const connectToMongo = () => {
    mongoose.connect(mongoURL, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;