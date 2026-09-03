import React from "react";

const DisplayProduct = ({ data }) => {
  return (
    <div>
      {data.map((value) => {
        return (
          <article key={value.name}>
            <img
              src={value.img}
              alt={value.name}
              height="200px"
              width="200px"
            />

            <h1>Product Name: {value.name}</h1>
            <h1>Product Price: {value.price}</h1>

            {value.quantity <= 5 && <p>Quantity: {value.quantity}</p>}

            <button>Add To Cart</button>

            <hr />
          </article>
        );
      })}
    </div>
  );
};

export default DisplayProduct;
