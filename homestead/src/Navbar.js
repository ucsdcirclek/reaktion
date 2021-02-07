import React from 'react';
import NavbarOption from './NavbarOption.js';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return(
    <div className="navbar">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');
      </style>
      <div className="navbarUpper">
        <div className="navbarBefore"></div>
          <Link to= "/" style={{ textDecoration: 'none' }}><h1 className="navbarTitle">UCSD Circle K</h1></Link>
        <div className="navbarAfter"></div>
      </div>
      <div className="navbarLower">
          <Link to= "/about" style={{ textDecoration: 'none' }}><NavbarOption text="About"/></Link>
          <Link to= "/calendar" style={{ textDecoration: 'none' }}><NavbarOption text="Calendar"/></Link>
          <Link to= "/account" style={{ textDecoration: 'none' }}><NavbarOption text="Account"/></Link>
      </div>
    </div>
  );
}

export default Navbar;
