import React from 'react';
import NavbarOption from './NavbarOption.js';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div className='navbar'>
      <div className='navbar_image'/>
      <div className='navbar_inner'>
        <div className='navbar_upper'>
          <Link to= '/' style={{ textDecoration: 'none' }}><div className='navbar_title'><h1>Circle K</h1><h2>at UCSD</h2></div></Link>
        </div>
        <div className='navbar_lower'>
            <Link to= '/about' style={{ textDecoration: 'none' }}><NavbarOption text='About'/></Link>
            <Link to= '/calendar' style={{ textDecoration: 'none' }}><NavbarOption text='Calendar'/></Link>
            <Link to= '/resources' style={{ textDecoration: 'none' }}><NavbarOption text='Resources'/></Link>
            <Link to= '/impact' style={{ textDecoration: 'none' }}><NavbarOption text='Impact'/></Link>
            <Link to= '/login' style={{ textDecoration: 'none' }}><NavbarOption text='Login'/></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
