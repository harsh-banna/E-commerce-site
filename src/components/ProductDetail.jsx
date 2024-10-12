import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import useFetch from "../utils/useFetch";
import { useDispatch } from "react-redux";
import { addItem} from "../utils/cartSlice";


function ProductDetails(){
    const [products, setproducts]=useState([]);

    const dispatch = useDispatch();  

    function handleAddtocart(item) {
        dispatch(addItem(item))
    }

    const params = useParams();

    const {data, error, loading} = useFetch('https://dummyjson.com/products');
   useEffect(()=>{
    if(data){
      setproducts(data.products);
    }
   },[data]);

   if(error) {
    return <h1> error in data fetchiong</h1>;}

   if(loading) {
    return <p>Loading.....</p>;
   }

    const product = products.filter((product) => product.id == params.id);

    console.log(product,"idnwala")


    if(product[0]){
    return(
        <>
        <img className="imgdetail" src={product[0].images} alt="" />
        <h4>{product[0].title}</h4>
        <h4>Brand: {product[0].brand}</h4>
        <button onClick={() => handleAddtocart(product[0])} >add to cart</button> 
        <h4>Price:{product[0].price}💲</h4>
        <h3>Rating: {product[0].rating}/5</h3>
        <p>{product[0].description}</p>
        </>
    )}
    else{
        return(
            <>
            <h1>loading....</h1>
            </>
        )
    }
}

export default ProductDetails;