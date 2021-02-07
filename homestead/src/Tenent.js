import React from 'react';
import './Tenent.css';

function Tenent({ title, image, hours }) {
  return (
    <div className='tenent'>
      <img className='tenent_logo' src={image}/>
      <div className='tenent_text'>
        <h3>{title}</h3>
        <h4>{hours} Hours</h4>
      </div>
    </div>
  );
}

export default Tenent;
