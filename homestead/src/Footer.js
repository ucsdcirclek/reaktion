import React from 'react';
import './Footer.css';
import masthead from './images/White+Masthead.png';

function Footer() {
  return (
    <div className='footer'>
      <img className='footer_masthead' src={masthead}/>
    </div>
  );
}

export default Footer;
