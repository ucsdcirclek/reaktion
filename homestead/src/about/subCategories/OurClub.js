import React from "react";
import Navbar from "./AboutNavbar.js";
import Board from "../Board.js";
import Footer from "../../Footer.js";
import "./OurClub.css";
import Amber from "../../images/board/Amber.jpg";
import An from "../../images/board/An.jpg";
import Anna from "../../images/board/Anna.png";
import EmilyC from "../../images/board/EmilyC.jpg";
import EmilyKw from "../../images/board/EmilyKw.jpg";
import Helen from "../../images/board/Helen.jpg";
import Jerome from "../../images/board/Jerome.jpg";
import Joaquin from "../../images/board/Joaquin.jpg";
import Marlenne from "../../images/board/Marlenne.jpg";
import Sarah from "../../images/board/Sarah.jpg";
import Shannon from "../../images/board/Shannon.jpg";
import Sophia from "../../images/board/Sophia.jpg";

function OurClub() {
  return (
    <div className="ourClub">
      <Navbar/>
      <div className="ourClub_sub">
        <div className="ourClub_text1">
          <h2>Overview</h2>
          <p>First chartered in 1977, Circle K International at UC San Diego is the largest community service organization on campus. 
          UCSD CKI distinguishes itself from other campus organizations for its dedications to <b>service</b>, <b>leadership</b>, and <b>fellowship</b>. We 
          participate in service projects including: La Jolla Kiwanis Club, Boys & Girls Club, Ladle Soup Kitchen, San Diego Food Bank, 
          American Red Cross, Reality Changers, and more. Our doors are always open to new members and we encourage you to come and get 
          involved today!</p>
        </div>
        <div className="ourClub_text1">
          <h2>General Body Meetings</h2>
          <p>UCSD Circle K holds general body meetings generally every week to discuss upcoming events, recognize members, and just have 
          some all around fun. Meetings are open to everyone and details can be found on the website calendar.</p>
        </div>
        <div className="ourClub_events">
          <h2>Key Events</h2>
          <div>
            <div className="ourClub_rows">
              <p>District Large Scale Service Project (DLSSP)</p>
              <p>Fall Training Conference (FTC)</p>
            </div>
            <div className="ourClub_rows">
              <p>Crazy Kompetition for Infants (CKI South)</p>
              <p>District Convention (DCON)</p>
            </div>
            <div className="ourClub_rows">
              <p>Masquerade Ball</p>
              <p>New Member Installation</p>
            </div>
          </div>
        </div>
        <div className="ourClub_events">
          <h2>Past Club Themes</h2>
          <ul>
            <li>2020-2021: Garden</li>
            <li>2019-2020: Biomes</li>
            <li>2018-2019: Space</li>
            <li>2017-2018: Blast to the Past</li>
            <li>2016-2017: Adventure</li>
          </ul>
          <ul>
            <li>2015-2016: Under the Sea</li>
            <li>2014-2015: Fairy Tales</li>
            <li>2012-2013: Spies</li>
            <li>2011-2012: The Nightmare Before Christmas</li>
          </ul>
        </div>
        <div className="ourClub_text1">
          <h2>Kiwanis</h2>
          <div>
            <p>Kiwanis International is a global community of clubs, members, and partners dedicated to improving the lives of children 
            one community at a time. Today, Kiwanis International has over 550,000 members from K-Kids to Key Club to Kiwanis stretching 
            between 80 countries and hosting around 150,000 service projects per year. UCSD Circle K is closely associated with the Kiwanis 
            Club of La Jolla which is proud to serve the needs of La Jolla Village and its surrounding neighborhood communities.</p>
            <h3>Kiwanis International website can be found <a href="https://www.kiwanis.org/"><b>here</b></a></h3>
            <h3>Kiwanis Club of La Jolla can be found <a href="https://kiwanisclublajolla.org/"><b>here</b></a></h3>
          </div>
        </div>
      </div>
      <div className='ourClub_board'>
          <h2>2020-2021 UCSD CKI Board</h2>
          <h3>Executive Board</h3>
          <div className='ourClub_execBoard'>
            <Board image={An} name='An Nguyen' title='Vice President of Administration' email='vpa@ucsdcki.org'/>
            <Board image={Helen} name='Helen Huynh' title='Vice President of Service' email='vps@ucsdcki.org'/>
            <Board image={Shannon} name='Shannon Lo' title='President' email='president@ucsdcki.org'/>
            <Board image={Joaquin} name='Joaquin Ramento' title='Secretary' email='secretary@ucsdcki.org'/>
            <Board image={EmilyC} name='Emily Chiew' title='Treasurer' email='treasurer@ucsdcki.org'/>
          </div>
          <h3>Appointed Board</h3>
          <div className='ourClub_appointedBoard1'>
            <Board image={Sophia} name='Sophia Jordan' title='Kiwanis Family Chair' email='kfam@ucsdcki.org'/>
            <Board image={Sarah} name='Sarah Fan' title='Media Chair' email='historian@ucsdcki.org'/>
            <Board image={Amber} name='Amber Pan' title='Member Relations' email='mr@ucsdcki.org'/>
            <Board image={EmilyKw} name='Emily Kwong' title='Social' email='social@ucsdcki.org'/>
          </div>
          <div className='ourClub_appointedBoard2'>
            <Board image={Marlenne} name='Marlenne Cota' title='Service' email='service@ucsdcki.org'/>
            <Board image={Jerome} name='Jerome Lam' title='Technology' email='technology@ucsdcki.org'/>
          </div>
        </div>
      <div className='ourClub_footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default OurClub;
