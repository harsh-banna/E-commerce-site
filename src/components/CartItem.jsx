import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

function CartItem(data){

    const dispatch = useDispatch(); 
    const deletecall = async (id) => {
        try {
            const result = await fetch(`http://localhost:4000/api/deletecart/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlcm5hbWUiLCJpYXQiOjE3MzAxMDY0ODEsImV4cCI6MTczMDExMDA4MX0.KsrzJH_Ntl4kTKdSKfFSapMV1X5zn1_94U6b3wi0fMw'
                }
            });
    
            if (!result.ok) {
                throw new Error(`Error: ${result.statusText}`);
            }
    
            const resultfinal = await result.json();
            console.log(resultfinal);
        } catch (error) {
            console.error("Error deleting item:", error); 
        }
    };

    async function handlequantity (id) {
        try {
            const result = await fetch(`http://localhost:4000/api/cart/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlcm5hbWUiLCJpYXQiOjE3MzAxMDY0ODEsImV4cCI6MTczMDExMDA4MX0.KsrzJH_Ntl4kTKdSKfFSapMV1X5zn1_94U6b3wi0fMw'
                }
            });
    
            if (!result.ok) {
                throw new Error(`Error: ${result.statusText}`);
            }
    
            const resultfinal = await result.json();
            console.log(resultfinal);
        } catch (error) {
            console.error("Error updateing the item:", error); 
        }
    }

    function handleremove(data){
        const {id,_id} = data;
        console.log(data,id,_id);
        dispatch(removeItem(id));///api/deletecart/:id
        deletecall(_id);
    }

    console.log(data.detail,"cart item");
    const {_id,title,thumbnail,price,quantity}=data.detail;
    return(
        <>
        <img
        className="cartimg" src={thumbnail} alt="" />
        <h1>{title}</h1>
        <h2>Price:{price}💲</h2>
        <h2>Quantity:{quantity}</h2>
        <button onClick={()=>handleremove(data.detail)}>delete</button>
        <button onClick={()=>handlequantity(_id)}>quantity</button>
        </>
    )
}

export default CartItem;