import React from 'react';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Login from './Login.js';
import About from './about/About.js';
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
          <Route path="/about/community/whitelotus"></Route>
          <Route path="/about/community/farmersoverflowers"></Route>
          <Route path="/about/community/breathofthesun"></Route>
          <Route path="/about/community/headintheclouds"></Route>
          <Route path="/about/membership"></Route>
          <Route path="/about/community"></Route>
          <Route path="/about"><About /></Route>
          <Route path="/calendar"></Route>
          <Route path="/teams"></Route>
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
