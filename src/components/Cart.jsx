import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem,removeItem,clearItem } from "../utils/cartSlice";

function Cart(){
    const cartItems = useSelector((store) => store.cart.items);
    console.log("items",cartItems);
    const dispatch = useDispatch();  
    // function handleremove(id){
    //     dispatch(removeItem(id));}
    function handleclear(){
        dispatch(clearItem());
    }    

    return(
        <>
        <h1>Cart</h1>
        <div className="cart" >
        {
            cartItems.map((data) => (<div><CartItem key={data.id} detail={data}/></div>))
        }
        </div>
        <div className="cartbtn">
        <button onClick={handleclear} className="btnend" >Clear Cart 🧹</button>
        <Link to="/checkout"><button className="btnend">Check-out 🎁</button></Link>
        </div>
        </>
    )
}
export default Cart;