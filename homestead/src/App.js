import React from 'react';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './about/About.js';
import Account from './account/Account.js';
import Calendar from './calendar/Calendar.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Router>
        {/*Navbar*/}
        <Navbar />
          <Switch>
            <Route path="/account"><Account /></Route>
            <Route path="/calendar"><Calendar /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
      </Router>
    </div>
  );
}


export default App;
