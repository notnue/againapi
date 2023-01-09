const router = require("express").Router();

const productController = require('../controllers/productController')

//router.post("/");
router.get("/",productController.product_all );
//router.get("/:productId"); // to get single product
//router.put("/:productId");
//router.delete("/:productId");

module.exports = router;
