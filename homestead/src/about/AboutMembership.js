import React from 'react';
import AboutHeader from './AboutHeader.js';
import './AboutMembership.css';
import { Link } from 'react-router-dom';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PaymentIcon from '@material-ui/icons/Payment';
import CommuteIcon from '@material-ui/icons/Commute';

function AboutMembership() {
  return (
    <div className="aboutMembership">
      <AboutHeader />
      <h2>Not sure where to start?</h2>
      <div className="aboutMembership_upper">
        <div className="aboutMembership_upperLeft">
          <h2>Service and Chill</h2>
          <p>Whether you're looking for a fun way to meet people on a day off or a community
          to serve, we've got you covered with a variety of social and service events
          for you to try out!</p>
          <p>Select a calendar event and click "guest signup" to try out our events!</p>
          <Link to= "/calendar" style={{ textDecoration: 'none' }}><button className='about_calendarMembership'>Calendar</button></Link>
        </div>
        <div className="aboutMembership_upperRight">
        <h2>Meet us at our GBMs</h2>
          <p>Check out our general body meetings to find out more about our community.
          Interact with new and old members, participate in challenges, win prizes, and
          get updates on what we have planned!</p>
          <p>GBMs occur every Monday at 8pm. Weekly GBM locations will be posted on our
          Facebook page.</p>
          <a href="https://www.facebook.com/groups/ucsdcki"><button className='aboutMembership_socialMedia'>Social Media</button></a>
        </div>
      </div>
      <div className="aboutMembership_mid">
      <h2>Ready to join</h2>
        <h2>Becoming an official is as easy as 1-2-3</h2>
        <p>Key Points for CST Quiz:</p>
        <p>A. Rides can be booked until 11:59 pm the day before</p>
        <p>B. Cancel Rides up to 1 hour before pick up time</p>
        <p>C. Drivers will only wait 5 minutes</p>
        <p>D. MAX # of missed rides = 3</p>
        <p>E. Must Bring UCSD ID</p>
        <p>F. Questions - contact servicevans@ucsd.edu</p>
      </div>
      <div className="aboutMembership_lower">
        <div className='aboutMembership_lowerApp'>
          <LibraryBooksIcon />
          <h2>Application</h2>
          <p>Follow the link below to fill out our online application. The information
          will be used to sort you into a family!</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQKFtTjYOs6yOsqtHAEMbHIOt3V3NrYWLm41V6Xyk0nE7vyw/viewform"><button className="aboutMembership_apply">Apply</button></a>
        </div>
        <div className='aboutMembership_lowerVenmo'>
          <PaymentIcon />
          <h2>MembershipDues</h2>
          <p>Dues cost $35 for the 2020-2021 school year. Pay by cash, check to UCSD
          Circle K, or venmo @UCSDCircleK.</p>
          <a href="https://venmo.com/UCSDCircleK"><button className="aboutMembership_venmo">Venmo Page</button></a>
        </div>
        <div className='aboutMembership_lowerCST'>
          <CommuteIcon />
          <h2>CST</h2>
          <p>Community Service Transportation (CST) will provide free rides to all our
          service events in the San Diego area. Just fill out their form and you're ready
          to go!</p>
          <a href="https://getinvolved.ucsd.edu/service/cstvans/orientation.html"><button className="aboutMembership_CST">CST Page</button></a>
        </div>
      </div>
      <h2>Official members of UCSD Circle K will be sorted into a family, be able to join committees,
      earn awards, access free rides to all events, eat free lunch at Kiwanis Luncheon, have
      a big or little, access district events, and run for board!</h2>
      <h2>Website Account</h2>
      <h2>Your online guide to UCSD Circle K!</h2>
    </div>
  );
}

export default AboutMembership;
