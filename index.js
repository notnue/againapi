const express = require("express");

const app = express(); //url vgera jo create krna ho uske liye
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//db kae connection k liye
mongoose.connect(
    process.env.DB_CONNECT, 
    { userUnifiedTopology: true, useNewUrlParser: true},
    () => console.log("connected yo db")
); 
mongoose.set('strictQuery', true);
mongoose.set('debug', true)

//routes import k liye
const productRoutes = require("./routes/product", ()=>{
    console.log("hello")
});

//route middlewares
app.use("/api/products", productRoutes)
app.listen(4000, ()=> {
    console.log("the server is up and running on 4000");
})

