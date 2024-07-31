import React, { useState } from 'react';
import './index.css';

const Checkout = ({ cart }) => {
  const [contactInfo, setContactInfo] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Booking confirmed!');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Contact Information:</label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Details:</label>
          <input
            type="text"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            required
          />
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Checkout;
