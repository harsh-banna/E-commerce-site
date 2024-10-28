import productModel from "../Model/products.model.js";


// export function createproducts (req,res) {
//     const {title,price, description,stock }=req.body;
//     const newProduct =new productModel({
//         title:title,
//         price:price,
//         description:description,
//         stock:stock,
//     });

//     newProduct.save().then(data => {
//         if(!data) {
//             return res.status(400).json({message: "Something went wrong"})
//         }

//         res.send(data);
//     });

// }


// fetching the data by help of find
export function fetchProducts(req,res) {
    productModel.find().then(data => {
        if(!data){
            return res.status(400).send("Something went wrong");
        }
        return res.send(data);// sending the data as a result
    }).catch(err => res.status(500).json({message: `internal server error=${err}`}))
}


// fetching specific data
export function fetchspecificproduct(req,res) {
    const Id = req.params.id;
    productModel.findById(Id).then(data => {
        if(!data){
            return res.status(400).send("Something went wrong");
        }
        return res.send(data);
    }).catch(err => res.status(500).json({message: `internal server error=${err}`}));
}