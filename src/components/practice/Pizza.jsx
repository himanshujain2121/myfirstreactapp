import React from "react";
import DominosCart from "./DominosCart";

const Pizza = () => {
  let pizza = [
    {
      name: "cheeseBurst",
      price: 300,
    },
    {
      name: "Nornal Pizza",
      price: 200,
    }
  ];
  return (
    <>
      <div>  ------------- Pizza ------------- </div>
      <DominosCart data={pizza}></DominosCart>
    </>
  );
};

export default Pizza;
