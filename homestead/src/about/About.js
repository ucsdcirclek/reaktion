import React from 'react';
import AboutHeader from './AboutHeader.js';
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
      <AboutHeader />
      <img className="about_ckiLogo" src={ckiLogo}/>
      <div className="about_upper">
        <h2>Mission</h2>
        <p>CKI (Circle K International) is a collegiate organization that is devoted
        to helping universities join a global network of responsible citizens and leaders
        with a lifelong commitment to service.</p>
        <h2>Pledge</h2>
        <p>I pledge to uphold the Objects of Circle K International, to foster compassion
        and goodwill toward others through service and leadership, to develop my abilities
        and the abilities of all people, AND TO DEDICATE MYSELF TO THE REALIZATION OF
        MANKIND'S POTENTIAL!</p>
        <h2>Overview</h2>
        <p>First chartered in 1977, Circle K International at UC San Diego is the largest
        community service organization on campus. UCSD CKI distinguishes itself from other
        campus organizations for its dedications to service, leadership, and fellowship.
        We participate in service projects including: La Jolla Kiwanis Club, Boys & Girls
        Club, Ladle Soup Kitchen, San Diego Food Bank, American Red Cross, Reality Changers,
        and more. Our doors are always open to new members and we encourage you to come and
        get involved today!</p>
        <div className="about_mid">
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
          <div className="about_events">
              <h2>Key Events</h2>
              <p>Masquerade Ball</p>
              <p>New Member Installation</p>
              <p>District Convention (DCON)</p>
              <p>Fall Training Conference (FTC)</p>
              <p>District Large Scale Service Project (DLSSP)</p>
              <p>Crazy Kompetition for Infants (CKI South)</p>
          </div>
        </div>
        <h2>General Body Meetings</h2>
        <p>UCSD Circle K holds general body meetings generally every week to discuss
        upcoming events, recognize members, and just have some all around fun. Meetings
        are open to everyone and details can be found on the website calendar.</p>
        <h2>Kiwanis</h2>
        <p>Kiwanis International is a global community of clubs, members, and partners
        dedicated to improving the lives of children one community at a time. Today,
        Kiwanis International has over 550,000 members from K-Kids to Key Club to
        Kiwanis stretching between 80 countries and hosting around 150,000 service
        projects per year. UCSD Circle K is closely associated with the Kiwanis Club
        of La Jolla which is proud to serve the needs of La Jolla Village and its
        surrounding neighborhood communities</p>
        <p>Kiwanis International website can be found <a href="https://www.kiwanis.org/">here</a>.</p>
        <p>Kiwanis Club of La Jolla can be found <a href="http://kiwanisclublajolla.org/">here</a>.</p>
      </div>
      <div className="about_structure">
        <h2>Structure</h2>
        <p> Circle K International operates on an international, sub-regional, district,
        divisional, and club level, and is comprised of over 13,000 members who make up
        over 500 clubs in 30 districts and 17 nations, including Antigua, Australia, Bahamas,
        Barbados, Canada, Cayman Islands, Colombia, Dominican Republic, Ecuador, Jamaica,
        Malaysia, México, Nigeria, Panama, Philippines, St. Lucia, Suriname, Taiwan and the
        United States.</p>
        <h2>Club</h2>
        <p>This level is comprised of members within a particular school or university.
        Here, a board of officers, executive board and appointed Board runs the operations
        of the club.Executive Board positions include: President, Administrative Vice President,
        Service Vice President, Treasurer, and Secretary. Appointed Board positions include:
        Social Chair, Fundraising Chair, Kiwanis Family Chair, Public Relations Chair, Member
        Relations Chair, Member Development and Education Chair, Fellowship Chair, Service Chair,
        and Technology Chair.</p>
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
        <div className="about_appointedBoard">
          <h2>Appointed Board</h2>
          <div className="about_appointedBoardRow1">
            <Board image={EmilyC} name='Emily Chiew' title='Fundraising Chair' email='fundraising@ucsdcki.org'/>
            <Board image={Ruthie} name='Ruthie Navarra' title='Kiwanis Family Chair' email='kfam@ucsdcki.org'/>
            <Board image={Shannon} name='Shannon Lo' title='Public Relations' email='pr@ucsdcki.org'/>
          </div>
          <div className="about_appointedBoardRow2">
            <Board image={Christina} name='Christina Tang' title='Member Relations' email='mr@ucsdcki.org'/>
            <Board image={EmilyK} name='Emily Kim' title='Member Development and Education' email='mde@ucsdcki.org'/>
            <Board image={An} name='An Nguyen' title='Fellowship' email='fellowship@ucsdcki.org'/>
          </div>
          <div className="about_appointedBoardRow3">
            <Board image={Blanchie} name='Blanchie Lui' title='Service' email='service@ucsdcki.org'/>
            <Board image={Jerome} name='Jerome Lam' title='Technology' email='technology@ucsdcki.org'/>
          </div>
        </div>
        <h2>Division</h2>
        <p>Each CKI division is composed of clubs within a close demographic area. UCSD
        Circle K is part of Paradise Division, one of the eight divisions of Cal-Nev-Ha
        and is made up of seven schools ranging from California to Hawaii. Our division’s
        mascots are the toucan and a pineapple.</p>
        <p>Paradise division's website can be found <a href="http://www.cnhcirclek.org/divisions/paradise/">here</a>.</p>

        <h2>Paradise Clubs</h2>
        <p>Palomar College</p>
        <p>Grossmont College</p>
        <p>California State University San Marcos</p>
        <p>Hawaii Pacific University</p>
        <p>San Diego State University</p>
        <p>University of California, San Diego</p>
        <p>University of Hawaii, Hilo</p>
        <p>University of Hawaii, Manoa</p>

        <h2>District</h2>
        <p>Each division then falls under a district which is usually bounded by state lines.
        During the annual district convention, delegates from all clubs within a district elect
        a Governor Secretary and Treasurer to serve on the District Executive Board. A board of
        district chairs are then appointed to carry out specific district focuses and events
        throughout the year in which clubs from all over the district can participate and attend.
        UCSD Circle K is part of the largest district in CKI, the Cal-Nev-Ha district, which
        comprises California, Nevada, and Hawaii. Our district spans over 2700 miles and holds
        40 clubs with over hundreds of members.</p>
        <p>CNH Circle K's website can be found <a href="http://www.cnhcirclek.org/">here</a>.</p>
        <p>CNH district resources can be found <a href="http://resources.cnhcirclek.org/">here</a>.</p>

        <h2>Major District Events</h2>
        <p>District Convention(DCON)</p>
        <p>Fall Training Conference</p>
        <p>CKI South</p>
        <p>District Large Scale Service Project (DLSSP) 2018</p>

        <h2>Sub-region</h2>
        <p>Every sub-region is a collective of bordering districts based on size, demographic,
        and cultures. Every year at the International Convention the sub-region elects a Trustee
        to be the voice and the bridge to CKI international.</p>

        <h2>International</h2>
        <p>Circle K International comprises 30 districts total. At this level, there
        is an International President and Vice President as well as 7 elected Sub-regional
        Trustees and a Trustee-at-Large.</p>
        <p>The International Circle K's website can be found <a href="https://circlek.org/">here</a>.</p>
        <p>The International Circle K's resources can be found <a href="https://www.circlek.org/resources-main/">here</a>.</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
