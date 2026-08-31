function Food({foodarr}){
    console.log(foodarr)
    return(
        <>
        <h1>Food</h1>
        <MovieCart foodarr={foodarr}></MovieCart>
       
        {/* {foodarr.map((val, index) => {
        return (
          <>
            <h2 key={index}>{val.name}</h2>
            <h3>Price: ₹{val.price}</h3>
          </>
        );
      })} */}

        </>
    )
}

export default Food