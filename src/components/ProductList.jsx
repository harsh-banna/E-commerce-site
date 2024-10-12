import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

function ProductList(){

    const [filteredproducts, setfilteredproducts]=useState([]);
    const [search,setsearch]=useState("");

   //const products=useFetch('https://dummyjson.com/products');
   //console.log(products);
   const {data, error, loading} = useFetch('https://dummyjson.com/products');
   useEffect(()=>{
    if(data){
      setfilteredproducts(data.products);
    }
   },[data]);

   if(error) {
    return <h1> error in data fetching</h1>;}

   if(loading) {
    return <p>Loading.....</p>;
   }


   function handlesearch(){
    console.log(search);
    const filterdata = data.products.filter((data) => 
    data.title.toLowerCase().includes(search.toLowerCase()));
    console.log(filterdata,"ye");
    setfilteredproducts(filterdata);}
    return(
        <>
        <h2>Product List</h2>
        <div className="searchbar" >        
        <input type="text" className='searchbox' onChange={(e) => setsearch(e.target.value)}/>
        <button className="searchbtn" onClick={handlesearch}>search</button>
        </div>
        <div className="productblock">{filteredproducts.map((data) => (<Link key={data.id} to={`/productdetail/${data.id}`} ><ProductItem key={data.id}  details={data}/></Link>))}</div>
        </>
    )
}

export default ProductList;