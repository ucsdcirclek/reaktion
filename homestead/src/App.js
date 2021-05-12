import React from 'react';
import Home from './Home.js';
import Navbar from './Navbar.js';
import About from './about/About.js';
import Calendar from './calendar/Calendar.js';
import Account from './account/Account.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
      </style>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/account'><Account /></Route>
            <Route path='/calendar'><Calendar /></Route>
            <Route path='/about'><About /></Route>
            <Route path='/'><Home /></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;




