import React, { useState } from 'react'
import AddProductForm from './AddProductForm'
import DisplayProduct from './DisplayProduct'

const AddProductContainer = () => {

  let [products,setProducts] = useState([])

  let handleAddProduct = (newProduct) => {
    // Create the updated array first
    const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
      
    // Set state with the new array
    setProducts(updatedProducts);
    
    // Now this will correctly show the updated list
    console.log("Updated products:", updatedProducts);
  };

  let handleDeleteProduct = (deleteProduct)=>{
    setProducts(products.filter(item=> item.id != deleteProduct.id))
  }



  return (
    <div>
      <section>
        <AddProductForm onAddProduct={handleAddProduct}></AddProductForm>
      </section>

      <section>
        <DisplayProduct products={products} onDeleteProduct={handleDeleteProduct}></DisplayProduct>
      </section>
    </div>
  )
}

export default AddProductContainer
