import React from "react";
import FbWidget from "./FbWidget.js";
import Family from "./Family.js";
import Tenet from "./Tenent.js";
import Footer from "./Footer.js";
import "./Home.css";
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import Service from "./images/Service.png";
import Leadership from "./images/Leadership.png";
import Fellowship from "./images/Fellowship.png";
import Banner from "./images/banner_2.jpg";
import Gardener from "./images/gardener.jpg"

function Home() {
  return (
    <div className="home">
      <div className="home_banner">
        <img src={Banner} alt="CircleK Masthead" className="home_masthead"/>
        <Link to= '/login' style={{ textDecoration: 'none' }}>
          <button class="home_joinBtn">JOIN US</button>
        </Link>
      </div>
      <div className="home_propagandaBubble">
        <div className="home_leftBubble">
          <div className="home_long_propaganda">
            <h2>This is literally the best organization on campus!</h2>
            <p>With over <b>13,000 members</b> worldwide who have served a total of <b>199,327 hours</b> of service, 
              we are one of the largest service organizations in the world
            </p>
          </div>
          <div className="home_short_propaganda">
            <h2>This is literally the best organization on campus!</h2>
            <p><b>13,000+</b> members worldwide</p>
            <p><b>199,327</b>hours of service</p>
          </div>
        </div>
        <div className="home_rightBubble">
          <img src={Gardener} alt="CircleK Propaganda" className="home_propaganda_img"/>
        </div>
      </div>
      <div className="home_background">
        {/* <div className="home_midLower">
          <h2>Announcements</h2>
          <h3>UCSD CKI 2021-2022 Member Resources</h3>
          <p>UCSD Circle K Member Resources Drive contains photos, applications, feedback forms, and GBM slides, so members can keep up to date
            on the latest Circle K has to offer!
          </p>
          <p className="home_midLowerS"><a href="https://drive.google.com/drive/folders/1K-QZmqDU7gapnsOlcdHofIB7sDF7Ko8O?usp=sharing" target="_blank">Circle K Member Resources Drive</a></p>
          <h3>Tech Team Applications Now Open!</h3>
          <p>UCSD Circle K Technology Team is looking for applicants to improve and maintain this website. If you want hands-on experience with frontend and 
            backend web development or experience designing new parts of the website, apply now!
          </p>
          <p><a href="https://docs.google.com/document/d/1KRAxS064lkr21rMDgMHHg2xac9DJRUPyj1gqC-i1p4E/edit?usp=sharing" target="_blank">UCSD Technology Team Application</a></p>
          <p>All members who finish the ten week program will receive a certificate of completion.</p>
        </div>
        <div className="home_lower">
          <div className="home_tenents">
            <h2>Club Hours</h2>
            <Tenet title="Service" image={Service} hours="2103"/>
            <Tenet title="Fellowship" image={Fellowship} hours="1358"/>
            <Tenet title="Leadership" image={Leadership} hours="2576"/>
          </div>
        </div> */}
        <div className="home_mid">
          <h2>Families</h2>
          <p>Join the Circle K Families and make new friends!</p>
          <div className="home_family">
            <Family image="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" title="Head in the Clouds"/>
            <Family image="https://i.pinimg.com/originals/84/e6/18/84e61804536e07d96ba088ede497d4dc.png" title="White Lotus"/>
            <Family image="https://c4.wallpaperflare.com/wallpaper/877/604/1005/anime-one-piece-minimalist-monkey-d-luffy-wallpaper-preview.jpg" title="Farmers over Flowers"/>
            <Family image="https://wallpapercave.com/wp/wp5244984.jpg" title="Breath of the Sun"/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
