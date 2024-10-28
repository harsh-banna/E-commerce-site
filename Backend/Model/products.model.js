import mongoose from "mongoose";


// Defineing the schema for the product
const productSchema = new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    stock:Number,
})



// Created model using the schema
const productModel = mongoose.model("products",productSchema);


export default productModel;