import React from "react";
import FbWidget from "./FbWidget.js";
import Family from "./Family.js";
import Tenent from "./Tenent.js";
import Footer from "./Footer.js";
import "./Home.css";
import ReactPlayer from "react-player";
import Service from "./images/Service.png";
import Leadership from "./images/Leadership.png";
import Fellowship from "./images/Fellowship.png";
import Masthead from "./images/CKIMasthead.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img src={Masthead} className="home_masthead"/>
      <div className="home_upper">
        <div className="home_propagandaBubble">
          <h2>Welcome to Circle K</h2>
          <p>This is literally the best organization on campus! Feel free to explore the
          website to learn more about us! If you have any questions contact a board member
          or family head. For any concerns about the website please contact our Tech Chair.
          Want to hang out online? Join our <a href="https://discord.gg/CMmeMUYNzK">Discord! </a>
          Want to join? First register an account and then fill out the appliction!</p>
        </div>
        <div className="home_propagandaVideo">
          <ReactPlayer
            className="welcomeBar_welcomeVideo"
            width="480"
            height="270px"
            controls
            url="https://www.youtube.com/watch?v=7D_sK6KqeI4"
          />
        </div>
      </div>
      <div className="home_mid">
        <div className="home_tenents">
          <h2>Tenents</h2>
          <Tenent title="Service" image={Service} hours="2103"/>
          <Tenent title="Fellowship" image={Fellowship} hours="1358"/>
          <Tenent title="Leadership" image={Leadership} hours="2576"/>
        </div>
        <div className="home_fb">
          <FbWidget />
        </div>
      </div>
      <div className="home_lower">
        <h2>UCSD CKI Families</h2>
        <div className="home_family">
          <Family image="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" title="Head in the Clouds"/>
          <Family image="https://i.pinimg.com/originals/84/e6/18/84e61804536e07d96ba088ede497d4dc.png" title="White Lotus"/>
          <Family image="https://c4.wallpaperflare.com/wallpaper/877/604/1005/anime-one-piece-minimalist-monkey-d-luffy-wallpaper-preview.jpg" title="Farmers over Flowers"/>
          <Family image="https://wallpapercave.com/wp/wp5244984.jpg" title="Breath of the Sun"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
