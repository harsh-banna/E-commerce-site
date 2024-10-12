


function ProductItem(data){
    const {title,thumbnail,price,rating}=data.details;
    //console.log("item");
    return(
        <><div className="productdiv">
        <img className="productimg" src={thumbnail} alt="" />
        <h3>{title}</h3>
        <h4>Price:_{price}💲Only</h4>
        <h4>Rating:_{rating}/5</h4>
        </div>
        </>
    )
}

export default ProductItem;