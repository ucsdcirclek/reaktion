import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <Link to =''> <h3>UCSD Circle K</h3> </Link>
      <nav>
        <ul className='nav-links'>
          <Link to='/calendar'> <li>Calendar</li> </Link>
          <Link to='/leaderboard'> <li>Leaderboard</li> </Link>
          <Link to='/profile'> <li>Profile</li> </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
