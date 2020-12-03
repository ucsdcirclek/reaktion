import React from 'react';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Login from './Login.js';
import About from './about/About.js';
import Teams from './teams/Teams.js';
import AboutMembership from './about/AboutMembership.js';
import AboutCommunity from './about/AboutCommunity.js';
import AboutClouds from './about/families/AboutClouds.js';
import AboutFlowers from './about/families/AboutFlowers.js';
import AboutLotus from './about/families/AboutLotus.js';
import AboutSun from './about/families/AboutSun.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      {/*Navbar*/}
      <Router>
        <Navbar />
          <Switch>
          {/*UCSDCKI*/}
          {/*About*/}
          {/*Calendar*/}
          {/*Teams*/}
          {/*Admin*/}
          <Route path="/about/community/whitelotus"><AboutLotus/></Route>
          <Route path="/about/community/farmersoverflowers"><AboutFlowers/></Route>
          <Route path="/about/community/breathofthesun"><AboutSun/></Route>
          <Route path="/about/community/headintheclouds"><AboutClouds/></Route>
          <Route path="/about/membership"><AboutMembership /></Route>
          <Route path="/about/community"><AboutCommunity /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/calendar"></Route>
          <Route path="/teams"><Teams /></Route>
          <Route path="/admin"></Route>
          <Route path="/"><Home /></Route>
          </Switch>
        {/*Login-Bar*/}
        <Login />
      </Router>
    </div>
  );
}


export default App;
