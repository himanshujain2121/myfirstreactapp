function FunctionBasedProps(props) {
  return (
    <>
      <h3>This is Function Based Props</h3>
      <h3>Name = {props.name}</h3>
      <h3>age = {props.age}</h3>

      <h3>This is Array Based Props</h3>
      { props.productDetails.map((details) => {
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
  );
}

export default FunctionBasedProps;
