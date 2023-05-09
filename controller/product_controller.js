const Product = require("../Model/Product");


// Add product function
module.exports.create = async (req, res) => {

    try {
        const { name, quantity } = req.body;
        const product = new Product({
            name,
            quantity
        })
        const saveProduct = await product.save()
            .catch((err) => console.log(err));
        res.json({
            name: saveProduct.name,
            quantity: saveProduct.quantity
        });

    } catch (err) {
        res.status(500).send("Internal Error")
    }
}

// Get all product
module.exports.getProduct = async (req, res) => {

    try {

        const products = await Product.find({});
        res.json(products)


    } catch (err) {
        res.status(500).send("Internal Error")

    }
}

// Update Product
module.exports.updateProduct = async (req, res) => {

    try {
        const { name, quantity } = req.body;

        // Create a newProduct object
        let updateProduct = {};

        if (name) { updateProduct.name = name };
        if (quantity) { updateProduct.quantity = quantity };


        // Find the product
        let product = await Product.findById(req.params.id);

        // update the product
        product = await Product.findByIdAndUpdate(req.params.id, { $set: updateProduct }, { new: true });

        res.status(200).json(
            {
                message: "Update successfully",
                product,
            })

    } catch (err) {
        res.status(500).send("Internal Error")
    }
}

// Delete Product
module.exports.deleteProduct = async (req, res) => {

    try {

        let product = await Product.findById(req.params.id)
        product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Product Deleted",
            product
        })


    } catch (err) {
        res.status(500).send("Internal Error")
    }
}