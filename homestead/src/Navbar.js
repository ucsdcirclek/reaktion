import React from 'react';
import NavbarOption from './NavbarOption.js';
import './Navbar.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import DeveloperBoardOutlinedIcon from '@material-ui/icons/DeveloperBoardOutlined';
import { Link } from "react-router-dom";

function Navbar() {
  return(
    <div className="navbar">
      <Link to= "/" style={{ textDecoration: 'none' }}><NavbarOption active Icon={HomeOutlinedIcon} text="UCSD CKI" /></Link>
      <Link to="/about" style={{ textDecoration: 'none' }}><NavbarOption Icon={ImportContactsOutlinedIcon} text="About" /></Link>
      <Link to="/calendar" style={{ textDecoration: 'none' }}><NavbarOption Icon={TodayOutlinedIcon} text="Calendar" /></Link>
      <Link to="/teams" style={{ textDecoration: 'none' }}><NavbarOption Icon={GroupOutlinedIcon} text="Teams" /></Link>
      <Link to="/admin" style={{ textDecoration: 'none' }}><NavbarOption Icon={DeveloperBoardOutlinedIcon} text="Admin" /></Link>
    </div>
  );
}

export default Navbar;
