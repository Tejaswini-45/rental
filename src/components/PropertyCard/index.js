import React from 'react';
import './index.css';

const PropertyCard = ({ property, onBook }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <button onClick={() => onBook(property)}>Book Now</button>
    </div>
  );
};

export default PropertyCard;
