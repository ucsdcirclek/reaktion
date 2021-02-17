import React from "react";
import NavbarOption from "./NavbarOption.js";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return(
    <div className="navbar">
      <div className="navbar_upper">
        <div className="navbar_before"></div>
          <Link to= "/" style={{ textDecoration: "none" }}><h1 className="navbar_title">UCSD Circle K</h1></Link>
        <div className="navbar_after"></div>
      </div>
      <div className="navbar_lower">
          <Link to= "/about" style={{ textDecoration: "none" }}><NavbarOption text="About"/></Link>
          <Link to= "/calendar" style={{ textDecoration: "none" }}><NavbarOption text="Calendar"/></Link>
          <Link to= "/account" style={{ textDecoration: "none" }}><NavbarOption text="Account"/></Link>
      </div>
    </div>
  );
}

export default Navbar;
