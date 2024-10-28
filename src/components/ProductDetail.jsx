import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import useFetch from "../utils/useFetch";
import { useDispatch } from "react-redux";
import { addItem} from "../utils/cartSlice";


function ProductDetails(){
    const [products,setproducts]=useState([]);

    const dispatch = useDispatch();  

    function handleAddtocart(item) {
        dispatch(addItem(item))
        submitdata(item._id);
        console.log(item._id);
    }

    // handleing the add to cart function 
    // jwt token should be updated 
    const submitdata = async (id) => {
        const data = {
            id: id
        };
    
        try {
            const result = await fetch("http://localhost:4000/api/addcart", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlcm5hbWUiLCJpYXQiOjE3MzAxMDY0ODEsImV4cCI6MTczMDExMDA4MX0.KsrzJH_Ntl4kTKdSKfFSapMV1X5zn1_94U6b3wi0fMw'
                },
                body: JSON.stringify(data)
            });
    
            const resultfinal = await result.json(); 
            console.log(resultfinal);
        } catch (error) {
            console.error("Error submitting data:", error); 
        }
    };

    const params = useParams();
   // fetching specific data with the help of params
    const {data, error, loading} = useFetch(`http://localhost:4000/api/product/${params.id}`);
    useEffect(()=>{
        if(data){
          setproducts(data);
          console.log(data ,"products", products);
        }
       },[data]);

   if(error) {
    return <h1> error in data fetchiong</h1>;}

   if(loading) {
    return <p>Loading.....</p>;
   }


    if(products){
    return(
        <>
        <img className="imgdetail" src={products.images} alt="" />
        <h4>{products.title}</h4>
        <button onClick={() => handleAddtocart(products)} >add to cart</button> 
        <h4>Price:{products.price}💲</h4>
        <p>{products.description}</p>
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