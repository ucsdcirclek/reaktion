import React from 'react';
import NavbarOption from './NavbarOption.js';
import './Navbar.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import DeveloperBoardOutlinedIcon from '@material-ui/icons/DeveloperBoardOutlined';

function Navbar() {
  return(
    <div className="navbar">
      <NavbarOption active Icon={HomeOutlinedIcon} text="UCSD CKI" />
      <NavbarOption Icon={ImportContactsOutlinedIcon} text="About" />
      <NavbarOption Icon={TodayOutlinedIcon} text="Calendar" />
      <NavbarOption Icon={GroupOutlinedIcon} text="Resources" />
      <NavbarOption Icon={DeveloperBoardOutlinedIcon} text="Admin" />
    </div>
  );
}

export default Navbar;
