import React from 'react'

const DominosCart = ({data}) => {
  return (
    <>
   {data.map((value, index) => (
        <div key={index}>
          <h3>{value.name}</h3>
          <h4>Price: ₹{value.price}</h4>
        </div>
      ))}
    </>
  )
}

export default DominosCart
