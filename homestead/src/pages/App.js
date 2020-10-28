import React, { useState } from 'react';
import '../App.css';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Calendar from './Calendar';
import Profile from './Profile';
import Leaderboard from './Leaderboard';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
