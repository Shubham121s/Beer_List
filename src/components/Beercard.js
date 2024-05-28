// src/components/BeerCard.js
import React from 'react';
import './BeerCard.css';

const BeerCard = ({ beer }) => (
  <div className="card">
    <img src={beer.image} alt={beer.name} />
    <div className="card-body">
      <h5 className="card-title">{beer.name}</h5>
      <p className="card-text">{beer.description}</p>
    </div>
  </div>
);

export default BeerCard;
