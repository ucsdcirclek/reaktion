import React from 'react';
import './AboutFamily.css';

function AboutFamily({ image, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})`}} className='aboutFamily'>
      <h2>{title}</h2>
    </div>
  );
}

export default AboutFamily;
