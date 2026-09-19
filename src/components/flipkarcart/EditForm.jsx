import React, { useState } from 'react';

const EditForm = ({ product, onUpdateProduct, onCancel }) => {
  let [formData, setFormData] = useState(product);

  let handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div>
        <label>Name: </label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Price: </label>
        <input 
          type="text" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} 
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default EditForm;