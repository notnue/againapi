const   Product = require("../model/Product");

//get all product
const product_all = async (req,res) => {
    console.log("sadshhhfd")
    try{
        const products=await Product.find();
        console.log(products, "fghbjnjk")
        res.send(products);
        console.log("sadshhyfguhfd")

    }catch(error){
        res.send({message: error})
    }

}
//single product
const product_details = async(req,res) => {}
//add new product
const product_create = async(req,res) => {}
//update product
const product_update = async(req,res) => {}
//delete product
const product_delete = async(req,res) => {}



module.exports={
    product_all,
    product_create,
    product_delete,
    product_details,
    product_update
}
