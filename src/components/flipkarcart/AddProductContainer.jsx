import React, { useState } from 'react'
import AddProductForm from './AddProductForm'
import DisplayProduct from './DisplayProduct'
import EditForm from './EditForm'

const AddProductContainer = () => {

  let [products,setProducts] = useState([])

  // States for managing the popup modal and active editing product
  let [editingProduct, setEditingProduct] = useState(null)
  
  let [isModalOpen, setIsModalOpen] = useState(false)

  // Add new product
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

  // Open modal and set target product to edit
  let handleOpenEditModal = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  // Close modal and reset editing state
  let handleCloseModal = () => {
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  // Update product list and close modal
  let handleUpdateProduct = (updatedProduct) => {
    setProducts(
      products.map((item) => (item.id === updatedProduct.id ? updatedProduct : item))
    );
    handleCloseModal();
  };



  return (
    <div>
      <section>
        <AddProductForm onAddProduct={handleAddProduct}></AddProductForm>
      </section>

      <section>
        <DisplayProduct products={products} onDeleteProduct={handleDeleteProduct} onEditClick={handleOpenEditModal}></DisplayProduct>
      </section>
      {/* Popup Modal Overlay */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '25px',
            borderRadius: '8px',
            width: '320px',
            color: '#000',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}>
            <h3>Edit Product</h3>
            <EditForm
              product={editingProduct} 
              onUpdateProduct={handleUpdateProduct} 
              onCancel={handleCloseModal} 
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default AddProductContainer
