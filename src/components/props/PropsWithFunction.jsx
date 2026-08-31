let PropsWithFunction = ({name,productDetails}) => {

    return(
        <>
        <h1>Props with function</h1>
        <h1>{name}</h1>
        { productDetails.map((details) => {
          return (
            <>
              <h3>
                    {details.name} - ₹{details.price}
                </h3>
              <button>Add To Cart</button>
            </>
          );
        })}

        </>
    )

}

export default PropsWithFunction