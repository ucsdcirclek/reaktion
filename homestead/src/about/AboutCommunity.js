import React from 'react';
import AboutHeader from './AboutHeader.js';
import AboutFamily from './AboutFamily.js';
import './AboutCommunity.css';
import { Link } from "react-router-dom";

function AboutCommunity() {
  return (
    <div className="aboutCommunity">
      <AboutHeader />
      <h2>What are families?</h2>
      <p>The family system is one of the most successful member-retention programs in UCSD Circle K.
      The family system creates opportunities for club members to make new friends and memories with
      others. Family members will be paired based on their responses on their membership application,
      allowing for extra compatibility. Families in UCSD Circle K hold socials, inter-family competitions, service events,
      have their own cheers, and much more! Find out which family you will be sorted into
      at this year's New Member Install!</p>
      <h2>UCSD Circle K Families (2020-2021)</h2>
      <div className="aboutCommunity_family">
        <div className="aboutCommunity_familyLeft">
          <Link to= "/about/community/headintheclouds" style={{ textDecoration: 'none' }}><AboutFamily image="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" title="Head in the Clouds"/></Link>
          <Link to= "/about/community/whitelotus" style={{ textDecoration: 'none' }}><AboutFamily image="https://i.pinimg.com/originals/84/e6/18/84e61804536e07d96ba088ede497d4dc.png" title="White Lotus"/></Link>
        </div>
        <div className="aboutCommunity_familyRight">
          <Link to= "/about/community/farmersoverflowers" style={{ textDecoration: 'none' }}><AboutFamily image="https://c4.wallpaperflare.com/wallpaper/877/604/1005/anime-one-piece-minimalist-monkey-d-luffy-wallpaper-preview.jpg" title="Farmers over Flowers"/></Link>
          <Link to= "/about/community/breathofthesun" style={{ textDecoration: 'none' }}><AboutFamily image="https://wallpapercave.com/wp/wp5244984.jpg" title="Breath of the Sun"/></Link>
        </div>
      </div>
      <h2>Big Little Program</h2>
      <p>What is the Big/Little Program? The Big/Little program serves as a great way
      for club members to connect with each other on an individual level. Based on the
      responses they give on this application, a "little" (a new member, typically) is
      to be matched with a "big" (returning member), who will serve as their mentor and
      friend both inside and outside of Circle K.</p>
      <h2>Apply Here!</h2>
      <p>Insert Happy Photos Here</p>
    </div>
  );
}

export default AboutCommunity;
