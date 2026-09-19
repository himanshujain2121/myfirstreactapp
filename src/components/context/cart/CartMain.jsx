import React from 'react';
import { CartProvider } from './CartContext'; // Adjust path if needed
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';

const CartMain = () => {
  return (
    <CartProvider>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default CartMain;