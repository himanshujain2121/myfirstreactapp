import React, { useState } from 'react'
import FormContent from './FormContent'
import DisplayProducts from './DIsplayProducts'
import './style.css';

const Container = () => {
    const [products, setProducts] = useState([]);
  
    const handleAddProduct = (newProduct) => {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    };
  
    const handleDeleteProduct = (id) => {
      setProducts(products.filter((item) => item.id !== id));
    };
  
    return (
        <div className="app-wrapper">
        <section className="left-section">
          <FormContent onAddProduct={handleAddProduct} />
        </section>
 
        <section className="right-section">
          <DisplayProducts 
            products={products} 
            onDeleteProduct={handleDeleteProduct} 
          />
        </section>
      </div>
    );
  };

  export default Container