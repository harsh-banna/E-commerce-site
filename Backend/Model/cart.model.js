import mongoose from "mongoose";

// Defineing the schema for the cart
const cartSchema = new mongoose.Schema({
    id:String,
    quantity:Number
});


// Created model using the schema
const cartModel = mongoose.model("cart",cartSchema);


export default cartModel;