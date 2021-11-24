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
          <Link to= '/' style={{ textDecoration: 'none' }}><div className='navbar_title'><img src="https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC9lMFwvNzAzMTNcL3Byb2plY3RzXC85NzU1NlwvYXNzZXRzXC9iMlwvMzQzODM5OFwvZGYxMmUxNmRiMGE1MzAyZDlkM2Y5M2RmYTFhMWFhN2ItMTU2NTk4NjYyMC5wbmcifQ:frontify:AhFT1603w9DP-XpbQ6O79j4DyMkOUd7UlZ8DINgC-4k?width=2400" width="60" height="60" ></img><h2>@ UCSD</h2></div></Link>
        </div>
        <div className='navbar_lower'>
            <Link to= '/about' style={{ textDecoration: 'none' }}><NavbarOption text='About'/></Link>
            <Link to= '/calendar' style={{ textDecoration: 'none' }}><NavbarOption text='Calendar'/></Link>
            <Link to= '/resources' style={{ textDecoration: 'none' }}><NavbarOption text='Resources'/></Link>
            <Link to= '/login' style={{ textDecoration: 'none' }}><NavbarOption text='Log In'/></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
