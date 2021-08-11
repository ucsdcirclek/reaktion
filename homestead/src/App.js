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
import Props from './FamilyPages.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FamilyPages from './FamilyPages.js';

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

            // Farmers over Flowers
            <Route path='/about/family/FarmersOverFlowers'><Props avatar={"https://c4.wallpaperflare.com/wallpaper/877/604/1005/anime-one-piece-minimalist-monkey-d-luffy-wallpaper-preview.jpg"} title={"Farmers over Flowers"} sidePicture={"https://cdn2.lamag.com/wp-content/uploads/sites/6/2018/03/california-poppies.jpg"} welcoming={"Welcome to Farmers over Flowers"} 
            message={"Dreamier than any K-drama lead. The family with super cool, fun, and welcoming members. Together, we are F4!"}/></Route>

            // Breath of the Sun
            <Route path='/about/family/BreathoftheSun'><Props avatar={"https://wallpapercave.com/wp/wp5244984.jpg"} title={"Breath of the Sun"} sidePicture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmZuacljtNXB39-stJFmKB2CQhxnCveIUXQ&usqp=CAU"} welcoming={"Welcome to Breath of the Sun"}
            message={"We are all about geeking over anime and game at full throttle! You will be placed in various challenges within these two cultures, but be rewarded as an elite, creative genius. Join us to expose your imagination. "}/></Route>

            // White Lotus
            <Route path='/about/family/WhiteLotus'><Props avatar={"https://wallpapercave.com/wp/wp5244984.jpg"} title={"Breath of the Sun"} sidePicture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmZuacljtNXB39-stJFmKB2CQhxnCveIUXQ&usqp=CAU"} welcoming={"Welcome to Breath of the Sun"}
            message={"We are all about geeking over anime and game at full throttle! You will be placed in various challenges within these two cultures, but be rewarded as an elite, creative genius. Join us to expose your imagination. "}/></Route>

            // Head in the clouds
            <Route path='/about/family/HeadintheClouds'><Props avatar={"https://wallpapercave.com/wp/wp5244984.jpg"} title={"Breath of the Sun"} sidePicture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmZuacljtNXB39-stJFmKB2CQhxnCveIUXQ&usqp=CAU"} welcoming={"Welcome to Breath of the Sun"}
            message={"We are all about geeking over anime and game at full throttle! You will be placed in various challenges within these two cultures, but be rewarded as an elite, creative genius. Join us to expose your imagination. "}/></Route>

            <Route path='/about/ourclub'><OurClub /></Route>
            <Route path='/about/structure'><Structure /></Route>
            <Route path='/about'><General /></Route>
            <Route path='/login'><LParent /></Route>
            <Route path='/resources'><Account /></Route>
            <Route path='/calendar'><Calendar /></Route>
            <Route path='/'><Home /></Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;




