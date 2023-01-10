const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    //_id: mongoose.ObjectId,
    name: String,
    detail: String,
    price: String,
    hero: String,
    image: String
});



module.exports = mongoose.model("Product", productSchema)
