import React, { useState } from 'react'
import DisplayProduct from './DisplayProduct'

const ProductContainer = () => {

    let [category,setCategory] = useState('')

    let productDetails = [
        {
            img: 'https://img.magnific.com/free-photo/shirt_1203-8194.jpg?semt=ais_hybrid&w=740&q=80',
            name: 'Shirt',
            price: 500,
            category: 'clothes',
            quantity: 15
          },
          {
            img: 'https://5.imimg.com/data5/SELLER/Default/2022/5/FZ/AR/OQ/138319557/redmi-note-7-4gb-64gb-mobile-phone-500x500.jpg',
            name: 'Mobile',
            price: 20000,
            category: 'electronics',
            quantity: 5
          },
          {
            img: 'https://media-ik.croma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/308673_jxaozj.png',
            name: 'Headset',
            price: 2000,
            category: 'electronics',
            quantity: 4
          },
          {
            img: 'https://www.jackjones.in/cdn/shop/files/901656701_g0.jpg?v=1745348300&width=2048',
            name: 'Jeans',
            price: 1000,
            category: 'clothes',
            quantity: 1
          }
    ]

   let updateCategory = (category)=> {
    setCategory(category)
   }

    let displayProduct = ()=>{
        if(category == null){
         return   <DisplayProduct data={productDetails}></DisplayProduct>
        }
        else if(category === "clothes"){
            return (
                <DisplayProduct data={productDetails.filter(value => value.category ==="clothes")}></DisplayProduct>
            ) 
        }
        else if(category  === "electronics"){
            return(
                <DisplayProduct data={productDetails.filter(value => value.category === "electronics")}></DisplayProduct>
            )
        }
    }

  return (
    <div>
        <button onClick={()=>updateCategory(null)}>All</button>
        <button onClick={()=>updateCategory('clothes')}>Clothing</button>
        <button onClick={()=>updateCategory('electronics')}>Electronics</button>
      {/* <DisplayProduct data={productDetails}></DisplayProduct> */}
      {displayProduct()}
    </div>
  )
}

export default ProductContainer
