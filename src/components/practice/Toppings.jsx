import React from 'react'
import DominosCart from './DominosCart';

const Toppings = () => {
    let Toppings = [
        {
          name: "extra cheese",
          price: 50,
        },
        {
          name: "Bread",
          price: 40,
        }
      ];
  return (
    <>
    <div>  ------------- Toppings  -------------  </div>
    <DominosCart data={Toppings}></DominosCart>
    </>
    
  )
}

export default Toppings
