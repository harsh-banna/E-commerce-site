import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

    const cartItems = useSelector((store) => store.cart.items);
    console.log("items",cartItems);



    return(
        <>
        <div className="header">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/cart"><img src="" alt="" /><button>Cart={cartItems.length}</button></Link>
        </div>
        </>
    )
}

export default Header;