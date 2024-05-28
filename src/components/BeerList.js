// src/components/BeerList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from '../components/Beercard';

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.sampleapis.com/beers/ale');
      setBeers(result.data);
    };
    fetchData();
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a beer..."
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="beer-list">
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default BeerList;
