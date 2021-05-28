import React from "react";
import Navbar from "./AboutNavbar.js";
import Footer from "../../Footer.js";
import "./General.css";

function General() {
  return (
    <div className="general">
        <Navbar />
        <div className="general_sub">
            <div className='general_text1'>
                <h2>Mission</h2>
                <p>CKI (Circle K International) is a collegiate organization that is devoted to helping universities join a global network of 
                responsible citizens and leaders with a lifelong commitment to service.</p>
            </div>
            <div className='general_text1'>
                <h2>History</h2>
                <p>CKI began in 1936 as Kiwanis club service project to provide an opportunity for ambitious young men to acquire a college 
                education by assisting them, with financial problems by means of scholarship or part-time employment. Today, CKI boasts a membership 
                of over 13,000 collegians on more than 500 campuses worldwide. Embodied by its tenets of leadership, fellowship, and service at club, 
                district, and international levels, CKI continues to grow as the largest collegiate service organization!</p>
            </div>
            <div className='general_events'>
                <h2>Noteable Events</h2>
                <ul className='general_eventsList'>
                    <li><b>1936</b> Circle K concept first presented</li>
                    <li><b>1947</b> First CKI club chartered</li>
                    <li><b>1949</b> CKI becomes an international organization</li>
                    <li><b>1957</b> First CKI district is established</li>
                    <li><b>1971</b> Females welcomed into CKI</li>
                    <li><b>1977</b> CKI is chartered at UC San Diego</li>
                    <li><b>1982</b> CKI membership surpasses 14,500 members</li>
                    <li><b>2005</b> 50th anniversary of CKI</li>
                </ul>
            </div>
            <h1>Tenets</h1>
            <div className='general_tenet'>
                <div className='general_tenetSub'>
                    <h2>Service</h2>
                    <p>UCSD Circle K holds multiple weekly service events and you do not have to be a paid member to participate. 
                    Our projects range from maintaining the campus community garden, to ladling soup at soup kitchens, 
                    to helping children at Boys and Girls Club. Rides are provided to all service events and meeting 
                    locations and details are disclosed in the event pages which can be located on our website calendar.</p>
                </div>
                <div className='general_tenetSub'>
                    <h2>Leadership</h2>
                    <p>UCSD Circle K has a multitude of leadership opportunities. We have a plethora of committees that are always
                    seeking more committee members and would be more than happy to receive member input. Furthermore, 
                    every event requires a chair, a responsibility that anyone may request. Lastly, our club has an 
                    Elected Board which is chosen by club members every year before Spring Quarter and an Appointed 
                    Board which is selected by the Elected Board. If you want to learn more about our current board as 
                    well as specific positions, please refer to the Contact Page.</p>
                </div>
                <div className='general_tenetSub'>
                    <h2>Fellowship</h2>
                    <p>UCSD Circle K provides an abundance of social and friendship opportunities. All of our events are always 
                    open to new members and can range from hanging out at the California beaches to going out for a 
                    meal at local San Diego restaurants, to having a board game night in the UCSD library. Circle K 
                    also has an awesome family system that enables more intimate friendships and a great mentorship 
                    program in which returning members guide new members through college. To view upcoming social events, 
                    please refer to the website calendar.</p>
                </div>
            </div>
            <div className='general_text1'>
                <h2>Pledge</h2>
                <p>I pledge to uphold the Objects of Circle K International, to foster compassion and goodwill toward others 
                through service and leadership, to develop my abilities and the abilities of all people, and 
                <b> to dedicate myself to the realization of mankind’s potential!</b></p>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default General;
