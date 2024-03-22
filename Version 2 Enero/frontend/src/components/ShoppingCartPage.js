import React, { useState } from 'react';
import ShoppingCart from './ShoppingCart';
import './ShoppingCart.css';
import SearchBar from './SearchBar';

function ShoppingCartPage({ cart, addToCart, removeFromCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  console.log('ShoppingCartPage', cart);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="shopping-cart">
      <div className="presentation">
        <div className="tittle-page">
          <h1>Carrito de compras</h1>
        </div>
      </div>
      <div className="shopping-cart-info">
        <ShoppingCart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default ShoppingCartPage;