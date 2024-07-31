import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './index.css';

const PropertyList = ({ addToCart }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/properties.json')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div className="property-list">
      {properties.length > 0 ? (
        properties.map(property => (
          <PropertyCard key={property.id} property={property} addToCart={addToCart} />
        ))
      ) : (
        <p>Loading properties...</p>
      )}
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default PropertyList;
