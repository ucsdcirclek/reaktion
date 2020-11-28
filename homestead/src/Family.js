import React from 'react';
import './Family.css';

function Family({ image, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})`}} className='family'>
      <h2>{title}</h2>
    </div>
  );
}

export default Family;
