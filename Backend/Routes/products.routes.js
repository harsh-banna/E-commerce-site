import { fetchProducts,fetchspecificproduct } from "../Controller/products.controller.js";
import { addproduct,updatecart,deleteCart } from "../Controller/cart.controller.js";
import jwt from "jsonwebtoken";

// middleware
// authenticateing the user with JWT token
function authUser(req,res,next) {
    const authHeader = req.headers['authorization']; // get's the token from the header
    const token = authHeader && authHeader.split(" ")[1]; // extract only the required part

    // jwt.verify is a function that helps us to verify the jwt token 
    jwt.verify(token,"shoppyGlobe",(err,user) => {
        if (err) {
            return res.status(403).json({message: "invalid jwt token"});
        }
        req.user = user;
        next();
} )
}

export function routes(app) {
    //app.post("/api/product",);
    app.get("/api/products", fetchProducts);
    app.get("/api/product/:id", fetchspecificproduct);
    app.post("/api/addcart",addproduct);
    app.put("/api/cart/:id",authUser,updatecart);
    app.delete("/api/deletecart/:id",authUser,deleteCart);
    app.post("/api/login",(req,res) => {
        const user = req.body.username;
        const accessToken = jwt.sign({user: user},"shoppyGlobe", {expiresIn:"20m"})
        res.send({token: accessToken});
    })
}