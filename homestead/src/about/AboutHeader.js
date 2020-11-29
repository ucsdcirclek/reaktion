import React from 'react';
import './AboutHeader.css';
import { Link } from "react-router-dom";

function AboutHeader() {
  return (
    <div className='aboutHeader'>
      <Link to= "/about" style={{ textDecoration: 'none' }}><h2 className='aboutHeader_link--active'>UCSD Circle K</h2></Link>
      <Link to= "/about/membership" style={{ textDecoration: 'none' }}><h2 className='aboutHeader_link'>Membership</h2></Link>
      <Link to= "/about/community" style={{ textDecoration: 'none' }}><h2 className='aboutHeader_link'>Community</h2></Link>
    </div>
  );
}

export default AboutHeader;
