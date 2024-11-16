import React from 'react';
import Gauge from './GaugeBis';

const Card = ({ name, icon, value, size }) => {
  return (
      <div className="card">
        <h2>{name}</h2>
        {icon}
        <Gauge value={value} size={size}/>
      </div>
  );
};

export default Card;