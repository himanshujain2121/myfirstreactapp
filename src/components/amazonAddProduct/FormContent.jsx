import React, { useState } from 'react'
import './style.css';

const FormContent = ({ onAddProduct }) => {
    const [product, setProduct] = useState({ name: '', price: '' });
    const { name, price } = product;
  
    const handleChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name.trim() || !price.trim()) return;
  
      onAddProduct(product);
      setProduct({ name: '', price: '' });
    };
  
    return (
        <div className="form-card">
        <h2 className="heading">Product Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="field-group">
            <label className="label">Product Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter the product name"
              className="input"
            />
          </div>
 
          <div className="field-group">
            <label className="label">Product Price</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={handleChange}
              placeholder="Enter the product price"
              className="input"
            />
          </div>
 
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default FormContent;