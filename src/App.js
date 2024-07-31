import React, { useState } from 'react';
import PropertyList from './components/PropertyList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (property) => {
    setCart([...cart, property]);
  };

  const removeFromCart = (propertyId) => {
    setCart(cart.filter(item => item.id !== propertyId));
  };

  return (
    <div className="App">
      <h1>Property Rental Platform</h1>
      <PropertyList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Checkout cart={cart} />
    </div>
  );
}

export default App;
