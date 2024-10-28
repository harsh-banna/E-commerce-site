import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/products.routes.js";
import cors from "cors";

const app = new express(); //creating a new server
app.use(express.json());
app.use(cors());

// runnig the server on port 4000
app.listen(4000,() => {
    console.log("server is runing on port 4000")
});

// connecting the database to server
mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;


// checking if the database is connected
db.on("open",() => {
    console.log("database connected")
});

db.on("error",() => {
    console.log("database is not connected")
});


//calling the routes function with app
routes(app); 