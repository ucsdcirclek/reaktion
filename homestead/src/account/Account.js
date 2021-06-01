import React from "react";
import Family from "../Family.js";
import Footer from "../Footer.js";
import "./Account.css";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PaymentIcon from "@material-ui/icons/Payment";
import CommuteIcon from "@material-ui/icons/Commute";
import { Link } from 'react-router-dom';

function Account() {
  return (
    <div className="account">
      <h2 className="account_title">Not sure where to start?</h2>
      <div className="account_upper">
        <div className="account_upperService">
          <h2>Service and Chill</h2>
          <p>Whether you're looking for a fun way to meet people on a day off or a community
          to serve, we've got you covered with a variety of social and service events
          for you to try out!</p>
          <p>Select a calendar event and click "guest signup" to try out our events!</p>
          <Link to= '/calendar' style={{ textDecoration: 'none' }}><button>Calendar</button></Link>
        </div>
        <div className="account_upperGBM">
          <h2>Meet us at our GBMs</h2>
          <p>Check out our general body meetings to find out more about our community.
          Interact with new and old members, participate in challenges, win prizes, and
          get updates on what we have planned!</p>
          <p>GBMs occur every Monday at 8pm. Weekly GBM locations will be posted on our
          Facebook page.</p>
          <a href="https://www.facebook.com/groups/ucsdcki"><button className="aboutMembership_socialMedia">Social Media</button></a>
        </div>
      </div>
      <h2 className="account_title">Meet The Circle K Community!</h2>
      <div className="account_mid">
        <div className="account_families">
          <h2>What are families?</h2>
          <p>The family system is one of the most successful member-retention programs in UCSD Circle K.
          The family system creates opportunities for club members to make new friends and memories with
          others. Family members will be paired based on their responses on their membership application,
          allowing for extra compatibility. Families in UCSD Circle K hold socials, inter-family competitions, service events,
          have their own cheers, and much more! Find out which family you will be sorted into
          at this year's New Member Install!</p>
        </div>
        <div className="account_bigLittle">
          <h2>Big Little Program</h2>
          <p>What is the Big/Little Program? The Big/Little program serves as a great way
          for club members to connect with each other on an individual level. Based on the
          responses they give on this application, a "little" (a new member, typically) is
          to be matched with a "big" (returning member), who will serve as their mentor and
          friend both inside and outside of Circle K.</p>
          <button>Apply Here!</button>
        </div>
      </div>
      <div className="account_presentFamilies">
        <h2>UCSD Circle K Families (2020-2021)</h2>
        <div className="home_family">
          <Family image="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" title="Head in the Clouds"/>
          <Family image="https://i.pinimg.com/originals/84/e6/18/84e61804536e07d96ba088ede497d4dc.png" title="White Lotus"/>
          <Family image="https://c4.wallpaperflare.com/wallpaper/877/604/1005/anime-one-piece-minimalist-monkey-d-luffy-wallpaper-preview.jpg" title="Farmers over Flowers"/>
          <Family image="https://wallpapercave.com/wp/wp5244984.jpg" title="Breath of the Sun"/>
        </div>
      </div>
      <h2 className="account_title">Ready to join</h2>
      <h3>Becoming an official member is as easy as 1-2-3</h3>
      <div className="account_lower">
        <div className="account_lowerApp">
          <LibraryBooksIcon />
          <h2>Application</h2>
          <p>Follow the link below to fill out our online application. The information
          will be used to sort you into a family!</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQKFtTjYOs6yOsqtHAEMbHIOt3V3NrYWLm41V6Xyk0nE7vyw/viewform"><button className="aboutMembership_apply">Apply</button></a>
        </div>
        <div className="account_lowerMembership">
          <PaymentIcon />
          <h2>Membership Dues</h2>
          <p>Dues cost $35 for the 2020-2021 school year. Pay by cash, check to UCSD
          Circle K, or venmo @UCSDCircleK.</p>
          <a href="https://venmo.com/UCSDCircleK"><button className="aboutMembership_venmo">Venmo Page</button></a>
        </div>
        <div className="account_lowerCST">
          <CommuteIcon />
          <h2>CST</h2>
          <p>Community Service Transportation (CST) will provide free rides to all our
          service events in the San Diego area. Just fill out their form and you're ready
          to go!</p>
          <a href="https://getinvolved.ucsd.edu/service/cstvans/orientation.html"><button className="aboutMembership_CST">CST Page</button></a>
        </div>
      </div>
      <div className="account_ready">
        <h2>Key Points for CST Quiz:</h2>
        <p>A. Rides can be booked until 11:59 pm the day before</p>
        <p>B. Cancel Rides up to 1 hour before pick up time</p>
        <p>C. Drivers will only wait 5 minutes</p>
        <p>D. MAX # of missed rides = 3</p>
        <p>E. Must Bring UCSD ID</p>
        <p>F. Questions - contact servicevans@ucsd.edu</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Account;
