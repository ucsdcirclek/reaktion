import React from 'react';
import Board from './Board.js';
import Footer from '../Footer.js';
import './About.css';
import ckiLogo from '../images/logo_CKI.png';
import JustinFong from '../images/board/Fongers.jpg';
import Evan from '../images/board/Evan2.0.jpg';
import Ramtin from '../images/board/Ramtin.jpg';
import Danielle from '../images/board/Danielle.jpg';
import Juicy from '../images/board/Juicy.jpg';
import EmilyC from '../images/board/EmilyC.jpg';
import Ruthie from '../images/board/Ruthie.jpg';
import Shannon from '../images/board/Shannon.jpg';
import Christina from '../images/board/Christina.jpg';
import EmilyK from '../images/board/EmilyK.jpg';
import An from '../images/board/An.jpg';
import Blanchie from '../images/board/Blanchie.jpg';
import Jerome from '../images/board/Jerome.jpg';

function About() {
  return (
    <div className="about">
      <div className="about_upper">
        <div className="about_mission">
          <h2>Mission</h2>
          <p>CKI (Circle K International) is a collegiate organization that is devoted
          to helping universities join a global network of responsible citizens and leaders
          with a lifelong commitment to service.</p>
        </div>
        <div className="about_overview">
          <h2>Overview</h2>
          <p>First chartered in 1977, Circle K International at UC San Diego is the largest
          community service organization on campus. UCSD CKI distinguishes itself from other
          campus organizations for its dedications to service, leadership, and fellowship.
          We participate in service projects including: La Jolla Kiwanis Club, Boys & Girls
          Club, Ladle Soup Kitchen, San Diego Food Bank, American Red Cross, Reality Changers,
          and more. Our doors are always open to new members and we encourage you to come and
          get involved today!</p>
        </div>
      </div>
      <div className="about_upperMid">
        <h2>Pledge</h2>
        <p>I pledge to uphold the Objects of Circle K International, to foster compassion
        and goodwill toward others through service and leadership, to develop my abilities
        and the abilities of all people,<b> AND TO DEDICATE MYSELF TO THE REALIZATION OF
        MANKIND'S POTENTIAL!</b></p>
      </div>
      <div className="about_lowerMid">
        <div className="about_gbm">
          <h2>General Body Meetings</h2>
          <p>UCSD Circle K holds general body meetings generally every week to discuss
          upcoming events, recognize members, and just have some all around fun. Meetings
          are open to everyone and details can be found on the website calendar.</p>
        </div>
        <div className="about_events">
            <h2>Key Events</h2>
            <p>Masquerade Ball</p>
            <p>New Member Installation</p>
            <p>District Convention (DCON)</p>
            <p>Fall Training Conference (FTC)</p>
            <p>District Large Scale Service Project (DLSSP)</p>
            <p>Crazy Kompetition for Infants (CKI South)</p>
        </div>
        <div className="about_themes">
          <h2>Past Club Themes</h2>
          <p>2020-2021: Garden</p>
          <p>2019-2020: Biomes</p>
          <p>2018-2019: Space</p>
          <p>2017-2018: Blast to the Past</p>
          <p>2016-2017: Adventure</p>
          <p>2015-2016: Under the Sea</p>
          <p>2014-2015: Fairy Tales</p>
          <p>2012-2013: Spies</p>
          <p>2011-2012: The Nightmare Before Christmas</p>
        </div>
      </div>
      <div className="about_lower">
        <div className="about_kiwanis">
          <h2>Kiwanis</h2>
          <p>Kiwanis International is a global community of clubs, members, and partners
          dedicated to improving the lives of children one community at a time. Today,
          Kiwanis International has over 550,000 members from K-Kids to Key Club to
          Kiwanis stretching between 80 countries and hosting around 150,000 service
          projects per year. UCSD Circle K is closely associated with the Kiwanis Club
          of La Jolla which is proud to serve the needs of La Jolla Village and its
          surrounding neighborhood communities</p>
          <br/><p>Kiwanis International website can be found <a href="https://www.kiwanis.org/">here</a>.</p>
          <p>Kiwanis Club of La Jolla can be found <a href="http://kiwanisclublajolla.org/">here</a>.</p>
        </div>
        <div className="about_executiveBoard">
          <h2>2020-2021 UCSD CKI Board</h2>
          <h2>"We Bare Board"</h2>
          <h2>Executive Board</h2>
          <div className="about_executiveBoardRow1">
            <Board image={JustinFong} name='Justin Fong' title='Vice President of Administration' email='vpa@ucsdcki.org'/>
            <Board image={Evan} name='Evan Lin' title='President' email='president@ucsdcki.org'/>
            <Board image={Ramtin} name='Ramtin Azarbard' title='Vice President of Service' email='vps@ucsdcki.org'/>
          </div>
          <div className="about_executiveBoardRow2">
            <Board image={Danielle} name='Danielle Lee' title='Secretary' email='secretary@ucsdcki.org'/>
            <Board image={Juicy} name='Justin Luc' title='Treasurer' email='treasurer@ucsdcki.org'/>
          </div>
        </div>
      </div>
      <div className="about_appointedBoard">
        <h2>Appointed Board</h2>
        <div className="about_appointedBoardRow1">
          <Board image={EmilyC} name='Emily Chiew' title='Fundraising Chair' email='fundraising@ucsdcki.org'/>
          <Board image={Ruthie} name='Ruthie Navarra' title='Kiwanis Family Chair' email='kfam@ucsdcki.org'/>
          <Board image={Shannon} name='Shannon Lo' title='Public Relations' email='pr@ucsdcki.org'/>
          <Board image={Christina} name='Christina Tang' title='Member Relations' email='mr@ucsdcki.org'/>
        </div>
        <div className="about_appointedBoardRow2">
          <Board image={EmilyK} name='Emily Kim' title='Member Development and Education' email='mde@ucsdcki.org'/>
          <Board image={An} name='An Nguyen' title='Fellowship' email='fellowship@ucsdcki.org'/>
          <Board image={Blanchie} name='Blanchie Lui' title='Service' email='service@ucsdcki.org'/>
          <Board image={Jerome} name='Jerome Lam' title='Technology' email='technology@ucsdcki.org'/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
