import React from 'react';
import Home from './Home.js';
import Navbar from './Navbar.js';
import About from './about/About.js';
import Calendar from './calendar/Calendar.js';
import Account from './account/Account.js';
import LParent from './login/LParent.js';
import General from './about/subCategories/General.js';
import OurClub from './about/subCategories/OurClub.js';
import Structure from './about/subCategories/Structure.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resources from './Resources.js';

function App() {
  return (
    <div className='app'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
        bottom: 70px;
      </style>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/about/ourclub'><OurClub /></Route>
            <Route path='/about/structure'><Structure /></Route>
            <Route path='/resources'><Resources /></Route>
            <Route path='/about'><General /></Route>
            <Route path='/login'><LParent /></Route>
            {/* <Route path='/resources'><Account /></Route> */}
            <Route path='/calendar'><Calendar /></Route>
            <Route path='/'><Home /></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;




