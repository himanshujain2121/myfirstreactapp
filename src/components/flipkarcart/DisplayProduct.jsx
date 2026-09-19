import React, { useState } from 'react'

const DisplayProduct = ({products, onDeleteProduct}) => {
  

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        products.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button>Edit</button>
            <button onClick={()=>{onDeleteProduct(item)}}>Delete</button>
          </div>
        ))
      )}
    </div>
  )
}

export default DisplayProduct
