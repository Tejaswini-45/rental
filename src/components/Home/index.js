import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import Filter from '../components/Filter';
import './Home.css';

const Home = ({ onBook }) => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    bedrooms: '',
    amenities: '',
  });

  useEffect(() => {
    fetch('/api/properties')
      .then(response => response.json())
      .then(data => setProperties(data));
  }, []);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const filteredProperties = properties.filter(property => {
    // Apply filter logic
    return true; // Filter conditions here
  });

  return (
    <div className="home">
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <div className="property-list">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} onBook={onBook} />
        ))}
      </div>
    </div>
  );
};

export default Home;
