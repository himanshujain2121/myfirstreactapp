
function ProductArray(props){
    console.log(props)
    return <>
    <h2>product Details</h2>
    {props.productDetails.map(details => {
    console.log(details.name)
      return (
        <>
         <h3>Product Name = {details.name}</h3>
         <h3>Product price = {details.price}</h3>
         <button>Add To Cart</button>
        </>
      )
    })}
    </>
}

export default ProductArray