import React from "react";
import FbWidget from "./FbWidget.js";
import Family from "./Family.js";
import Tenet from "./Tenent.js";
import Footer from "./Footer.js";
import "./Home.css";
import ReactPlayer from "react-player";
import Service from "./images/Service.png";
import Leadership from "./images/Leadership.png";
import Fellowship from "./images/Fellowship.png";
import Banner from "./images/CKIMasthead.png";

function Home() {
  return (
    <div className="home">
      <img src={Banner} alt="CircleK Masthead" className="home_masthead"/>
      <div className="home_background">
        <div className="home_upper">
          <div className="home_propagandaBubble">
            <h2>Welcome!</h2>
            <p>This is literally the best organization on campus! Circle K International is the largest service
            organization in the world, with over 13,000 members worldwide who have served a total of 199,327 hours
            of service.</p>
            <p>Want to Join? Register an account here and fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQKFtTjYOs6yOsqtHAEMbHIOt3V3NrYWLm41V6Xyk0nE7vyw/viewform">Application!</a></p>
            <p>Want to hang out online? Join our <a href="https://discord.gg/CMmeMUYNzK">Discord!</a></p>
            <p>Feel free to explore the website to learn more about us!</p>
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
          <h2>UCSD Circle K Families</h2>
          <p>The family system is one of the most successful member-retention programs in UCSD Circle K. The family system creates opportunities for club members
          to make new friends and memories with others.</p>
          <p>Families in UCSD Circle K hold socials, inter-family competitions, service events, have their own cheers, and much more! Find
            out which family you will be sorted into at this year's New Member Install. Click on the family emblems below to learn more!</p>
          <div className="home_family">
            <Family image="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" title="Head in the Clouds"/>
            <Family image="https://i.pinimg.com/originals/84/e6/18/84e61804536e07d96ba088ede497d4dc.png" title="White Lotus"/>
            <Family image="https://c4.wallpaperflare.com/wallpaper/877/604/1005/anime-one-piece-minimalist-monkey-d-luffy-wallpaper-preview.jpg" title="Farmers over Flowers"/>
            <Family image="https://wallpapercave.com/wp/wp5244984.jpg" title="Breath of the Sun"/>
          </div>
        </div>
        <div className="home_midLower">
          <h2>Announcements</h2>
          <h3>12th Annual Kids Rock Concert</h3>
          <p>Circle K International at the University of California, Riverside will be hosting its largest scale fundraiser of the year, the Kids Rock Concert. For the past 12 years, our organization has prepared a concert with both locally and online famous performers. Our proceeds have and continue to go to the Pediatric Trauma Program, PTP, at our local Loma Linda University Children’s Hospital.</p>
          <p className="home_midLowerS">From live performances, games, silent auctions, prizes, and food/drinks, we hope you decide to join us to celebrate 12 years of our history and continuous support for PTP.</p>
          <h3>Big/Little Applications 2020-2021</h3>
          <p>Looking for a closer relationship with someone in Circle K? Want someone to guide you through college or just somebody to hang out and get food with?</p>
          <p>Big/Little Applications are open, and that means you have the chance to make these kinds of connections!! Whether you're a returning member hoping to be a big, or a new member who has no clue what Bigs and Littles are, the Big/Little system welcomes all members who have attended at least 2 socials and 2 services this quarter!</p>
        </div>
        <div className="home_lower">
          <div className="home_tenents">
            <h2>Club Hours</h2>
            <Tenet title="Service" image={Service} hours="2103"/>
            <Tenet title="Fellowship" image={Fellowship} hours="1358"/>
            <Tenet title="Leadership" image={Leadership} hours="2576"/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
