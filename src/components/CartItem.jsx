import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

function CartItem(data){

    const dispatch = useDispatch();  

    function handleremove(id){
        dispatch(removeItem(id));}

    console.log(data.detail,"cart item");
    const {id,title,thumbnail,price,quantity}=data.detail;
    return(
        <>
        <img
        className="cartimg" src={thumbnail} alt="" />
        <h1>{title}</h1>
        <h2>Price:{price}💲</h2>
        <h2>Quantity:{quantity}</h2>
        <button onClick={()=>handleremove(id)}>delete</button>
        </>
    )
}

export default CartItem;