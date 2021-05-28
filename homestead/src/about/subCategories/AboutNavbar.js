import React from "react";
import "./AboutNavbar.css";
import { Link } from 'react-router-dom';

function AboutNavbar() {
  return (
    <div className="aboutNavbar">
        <Link to= '/about' style={{ textDecoration: 'none' }}><h2>General</h2></Link>
        <h3>/</h3>
        <Link to= '/about/structure' style={{ textDecoration: 'none' }}><h2>Structure</h2></Link>
        <h3>/</h3>
        <Link to= '/about/ourclub' style={{ textDecoration: 'none' }}><h2>Our Club</h2></Link>
    </div>
  );
}

export default AboutNavbar;
