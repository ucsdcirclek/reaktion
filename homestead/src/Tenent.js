import React from 'react';
import './Tenent.css';

function Tenent({ title, image }) {
  return (
    <div className='tenent'>
      <img className='tenent_logo' src={image}/>
      <h2>{title}</h2>
    </div>
  );
}

export default Tenent;
