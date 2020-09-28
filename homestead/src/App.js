import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Calendar from './Calendar';
import Profile from './Profile';
import Leaderboard from './Leaderboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
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

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
