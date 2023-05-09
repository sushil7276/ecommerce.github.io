const connectToMongo = require("./db");
const express = require("express");
const port = 4003;

// connect to mongo
connectToMongo()
const app = express();
// read json
app.use(express.json())

// use express router 
app.use('/products', require('./routes/product'));

// Connect to port
app.listen(port, () => {
    console.log(`E-commerce started Port: ${port}`)
})