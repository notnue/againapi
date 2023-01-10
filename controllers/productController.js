const   Product = require("../model/Product");

//get all product
const product_all = async (req,res) => {
    console.log("sadshhhfd")
    try{
        const products=await Product.find();
        console.log(products, "fghbjnjk")
        res.json(products);
        console.log("sadshhyfguhfd")

    }catch(error){
        res.json({message: error})
    }

}
//single product
const product_details = async(req,res) => {
    try{
        const products=await Product.findById(req.params.ProductId);
        //console.log(mongoose.Types.ObjectId.isValid(req.params.locationid))
        res.json(products);
        console.log("sadsdtfyghujikolphhyfguhfd")

    }catch(error){
        res.json({message: error})
    }
}
//add new product
const product_create = async(req,res) => {
    const product = new Product({
        name: req.body.name,
        detail: req.body.detail,
        price: req.body.price,
        hero: req.body.hero,
        image: req.body.image
    });
        try {
            const savedProduct = await product.save();
            res.send(savedProduct);
        }catch (error){
            res.status(400).send(error);
        }
}
//update product
const product_update = async(req,res) => {
    try{
    const product ={
            name: req.body.name,
            detail: req.body.detail,
            price: req.body.price,
            hero: req.body.hero,
            image: req.body.image
        };

        const updatedProduct = await Product.findByIdAndUpdate({
            _id: req.params.productId
        }, product);
        res.json(updatedProduct);
        }catch (error) {
            res.json({message: error})
        }
    }


//delete product
const product_delete = async(req,res) => {
    try{    
        const removeProduct = await Product.findByIdAndDelete(
        req.params.productId);
            res.json(removeProduct);
            }catch (error) {
                res.json({message: error})
            }
}



module.exports={
    product_all,
    product_create,
    product_delete,
    product_details,
    product_update
}
