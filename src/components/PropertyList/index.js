import React from 'react';
import PropertyCard from '../PropertyCard';

import './index.css';

const PropertyList = ({ addToCart }) => {
  return (
    <div className="property-list">
      {property.map(property => (
        <PropertyCard key={property.id} property={property} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default PropertyList;
