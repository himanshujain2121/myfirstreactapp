import React from 'react'
import './style.css';

const DisplayProducts = ({ products, onDeleteProduct }) => {
    return (
      <div className="list-container">
      {products.map((item) => (
        <div key={item.id} className="product-card">
          <p className="text">
            <strong>Product Name:</strong> {item.name}
          </p>
          <p className="text">
            <strong>Product Price:</strong> {item.price}
          </p>
          <div className="btn-group">
            <button className="edit-btn">Edit</button>
            <button
              className="delete-btn"
              onClick={() => onDeleteProduct(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
    );
  };
  
  export default DisplayProducts;
