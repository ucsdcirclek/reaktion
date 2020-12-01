import React from 'react';
import NavbarOption from './NavbarOption.js';
import './Navbar.css';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import TodaySharpIcon from '@material-ui/icons/TodaySharp';
import ImportContactsSharpIcon from '@material-ui/icons/ImportContactsSharp';
import GroupSharpIcon from '@material-ui/icons/GroupSharp';
import DeveloperBoardSharpIcon from '@material-ui/icons/DeveloperBoardSharp';
import { Link } from "react-router-dom";

function Navbar() {
  return(
    <div className="navbar">
      <Link to= "/" style={{ textDecoration: 'none' }}><NavbarOption active Icon={HomeSharpIcon} text="UCSD CKI" /></Link>
      <Link to="/about" style={{ textDecoration: 'none' }}><NavbarOption Icon={ImportContactsSharpIcon} text="About" /></Link>
      <Link to="/calendar" style={{ textDecoration: 'none' }}><NavbarOption Icon={TodaySharpIcon} text="Calendar" /></Link>
      <Link to="/teams" style={{ textDecoration: 'none' }}><NavbarOption Icon={GroupSharpIcon} text="Teams" /></Link>
      <Link to="/admin" style={{ textDecoration: 'none' }}><NavbarOption Icon={DeveloperBoardSharpIcon} text="Admin" /></Link>
    </div>
  );
}

export default Navbar;
