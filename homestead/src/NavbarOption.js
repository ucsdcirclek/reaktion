import React from 'react';
import './NavbarOption.css';

function NavbarOption({text}) {
  return (
    <div className='navbarOption'>
      <h1>{text}</h1>
    </div>
  );
}

export default NavbarOption;
