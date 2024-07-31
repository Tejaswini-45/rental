import React from 'react';
import './index.css';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Booked Properties</h2>
      {cart.length === 0 ? (
        <p>No properties booked yet.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.title} - ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <p>Total: ${total}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
