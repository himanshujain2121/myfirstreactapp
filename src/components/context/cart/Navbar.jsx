import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  
  // Calculate total quantity of items in the cart
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', backgroundColor: '#222', color: '#fff' }}>
      <h2>E-Store</h2>
      <div style={{ fontSize: '18px', cursor: 'pointer' }}>
        🛒 Cart <span style={{ backgroundColor: '#ff4757', padding: '2px 8px', borderRadius: '50%', fontSize: '14px' }}>{totalCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;