const express = require('express');
const router = express.Router();
const productController = require("../controller/product_controller");


router.post("/create", productController.create);
router.get("/", productController.getProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);



module.exports = router;