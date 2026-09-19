import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  let [product,setProduct] = useState({ name: '', price: '' })

  let { name, price } = product;


  let handleChange= (e)=>{
    setProduct({...product,[e.target.name]:e.target.value})
   
  }

  let handleSubmit = (e)=>{
    e.preventDefault();
    console.log(product)
    onAddProduct(product)
    setProduct({name:'',price:''})
  }

  return (
    <div>
      <form action=""onSubmit={handleSubmit}>
        <label htmlFor="">Product Form</label>
        <input type="text" name="name" value={name} onChange={handleChange}/>
        <input type="text" name="price" value={price} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProductForm;
