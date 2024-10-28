import cartModel from "../Model/cart.model.js";

export async function addproduct(req, res) {
    const { id } = req.body; // getting the id form the body
    
    try {
        const cartdata = await cartModel.findOne({ id: id }); // Useing findOne to check if it already exist or not 

        if (cartdata) { 

            return res.status(403).json({
                success:true,
                message:'item already added to cart',
                data:cartdata
            })
        } else {
            const cartitem = new cartModel({
                id: id,
                quantity: 1,
            });

            // createing the new cartitem
            const newData = await cartitem.save().then(data => {if(!data) {
                                return res.status(400).json({message: "Something went wrong"})
                            }});
            
                            return res.status(200).json({
                                success:true,
                                message:'cart item created',
                                data:newData
                            })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}


// updateing the cart quantity
export async function updatecart (req,res) {
        const id = req.params.id;  // getting the id form the params

        const cartdata = await cartModel.findOne({ id: id });  //finding the cartitem 
        console.log(cartdata);
        if(cartdata){
            cartdata.quantity += 1;  // updateing the value with +1
            const newdata = await cartdata.save().then(data => {
                if(!data) {
                    return res.status(400).json({message: "Something went wrong"})
                }});
                return res.status(200).json({
                    success:true,
                    message:'updated',
                    data:newdata});
        }
            return res.status(404).json({message: "book with this id not present"});
 }



export async function deleteCart (req,res) {
    const id = req.params.id; // getting the id form the params
    const cartitem = cartModel.findOne({ id: id });
    if(!cartitem){
        return res.status(404).json({message: "There is no user with this id"})
    }

    // deleteing the item by help of deleteOne
    const deleted = await cartModel.deleteOne({id:id});

    return res.status(200).json({
        success:true,
        message:'deleted',
        data:deleted});
}        