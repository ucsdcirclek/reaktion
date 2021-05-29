import React from "react";
import Navbar from "./AboutNavbar.js";
import Footer from "../../Footer.js";
import "./Structure.css";

function Structure() {
  return (
    <div className="structure">
      <Navbar />
        <div className="structure_sub">
          <div className='structure_text1'>
            <h2>Scope</h2>
            <p>Circle K International operates on an international, sub-regional, district, divisional, and club level, 
            and is comprised of over 13,000 members who make up over 500 clubs in 30 districts and 17 nations, including 
            Antigua, Australia, Bahamas, Barbados, Canada, Cayman Islands, Colombia, Dominican Republic, Ecuador, 
            Jamaica, Malaysia, México, Nigeria, Panama, Philippines, St. Lucia, Suriname, Taiwan and the United 
            States.</p>
          </div>
          <div className='structure_text1'>
            <h2>Club</h2>
            <p>This level is comprised of members within a particular school or university. Here, a board of officers, 
            executive board and appointed Board runs the operations of the club.Executive Board positions include: President, 
            Administrative Vice President, Service Vice President, Treasurer, and Secretary. Appointed Board positions 
            include: Social Chair, Fundraising Chair, Kiwanis Family Chair, Public Relations Chair, Member Relations Chair, 
            Member Development and Education Chair, Fellowship Chair, Service Chair, and Technology Chair.</p>
          </div>
          <div className='structure_text1'>
            <h2>Division</h2>
            <div>
              <p>Each CKI division is composed of clubs within a close demographic area. UCSD Circle K is part of Paradise Division, 
              one of the eight divisions of Cal-Nev-Ha and is made up of seven schools ranging from California to Hawaii. Our division’s 
              mascots are the <b>toucan</b> and a <b>pineapple.</b></p>
              <h3>Paradise division's website can be found <a href="http://www.cnhcirclek.org/divisions/paradise/"><b>here</b></a></h3>
            </div>
          </div>
          <div className='structure_clubs'>
            <h2>Paradise Clubs</h2>
            <div className='structure_list'>
              <div className='structure_row1'>
                <h2><a href="https://www.sdsucirclek.org/">San Diego State University</a></h2>
                <h2>University of California, San Diego</h2>
                <h2><a href="https://csusmcki.wixsite.com/csusmcki">California State University, San Marcos</a></h2>
              </div>
              <div className='structure_row2'>
                <h2>University of Hawaii, Hilo</h2>
                <h2><a href='http://www2.hawaii.edu/~cki/#intro'>University of Hawaii, Manoa</a></h2>
                <h2>Hawaii Pacific University</h2>
              </div>
              <div className='structure_row3'>
                <h2><a href='https://csusmcki.wixsite.com/csusmcki/circle-k-info'>Palomar College</a></h2>
                <h2><a href='https://gcsummit.com/11637/uncategorized/the-circle-k-of-grossmont/'>Grossmont College</a></h2>
              </div>
            </div>
          </div>
          <div className='structure_text1'>
            <h2>District</h2>
            <div>
              <p>Each division then falls under a district which is usually bounded by state lines. During the annual district convention, 
              delegates from all clubs within a district elect a Governor Secretary and Treasurer to serve on the District Executive Board. 
              A board of district chairs are then appointed to carry out specific district focuses and events throughout the year in which 
              clubs from all over the district can participate and attend. UCSD Circle K is part of the largest district in CKI, the Cal-Nev-Ha 
              district, which comprises California, Nevada, and Hawaii. Our district spans over 2700 miles and holds 40 clubs with over hundreds 
              of members.</p>
              <h3>CNH Circle K's website can be found <a href="http://www.cnhcirclek.org/"><b>here</b></a></h3>
              <h3>CNH district resources can be found <a href="http://resources.cnhcirclek.org/"><b>here</b></a></h3>
            </div>
          </div>
          <div className='structure_district'>
            <h2>Major District Events</h2>
            <ul>
              <li><a href='https://dcon.cnhcirclek.org/'>District Convention (DCON)</a></li>
              <li><a href='http://ftc.cnhcirclek.org/'>Fall Training Conference</a></li>
              <li><a href='https://crazykomp.cnhcirclek.org/'>CKI South</a></li>
              <li><a herf='http://www.cnhcirclek.org/district-large-scale-service-project-2018/'>District Large Scale Service Project (DLSSP) 2018</a></li>
            </ul>
          </div>
          <div className='structure_text1'>
            <h2>Sub-region</h2>
            <p>Every sub-region is a collective of bordering districts based on size, demographic, and cultures. Every year at the International 
            Convention the sub-region elects a Trustee to be the voice and the bridge to CKI international.</p>
          </div>
          <div className='structure_text1'>
            <h2>International</h2>
            <div>
              <p>Circle K International comprises 30 districts total. At this level, there is an International President and 
              Vice President as well as 7 elected Sub-regional Trustees and a Trustee-at-Large.</p>
              <h3>The International Circle K's website can be found <a href="https://www.circlek.org/"><b>here</b></a></h3>
              <h3>The International Circle K's resources can be found <a href="https://www.circlek.org/resources-main/"><b>here</b></a></h3>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Structure;
