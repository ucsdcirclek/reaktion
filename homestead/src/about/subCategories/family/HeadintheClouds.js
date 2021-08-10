import React from "react";
import "./HeadintheClouds.css";
import Footer from "../../../Footer.js";

function HeadintheClouds() {
  return (
    <div className="HeadintheClouds">
      <div className="cloudsinside">
        <div className="leftcol">
          <div className="leftbox">
            <img className="familyimg" src="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" alt=""/>
            <p className="defaultwhite">Head in the Clouds Stats</p>
            <div className="statscloud">
              <h3>5.0</h3>
              <h3>2.0</h3>
              <h3>1.0</h3>
              <p>SERVICE</p>
              <p>FELLOWSHIP</p>
              <p>LEADERSHIP</p>
            </div>
            <div className="profileleft">
              <div className="leftpro">
                <img className="profile" src="https://picsum.photos/150" alt=""/>
              </div>
              <div className="rightpro">
                <p className="defaultblack">Jean Campbell</p>
                <p className="defaultsmall">jcampbell@ucsd.edu</p>
              </div>
            </div>
            <div className="profileleft">
              <div className="leftpro">
                <img className="profile" src="https://picsum.photos/151" alt=""/>
              </div>
              <div className="rightpro">
                <p className="defaultblack">Andrew Chen</p>
                <p className="defaultsmall">achen006@ucsd.edu</p>
              </div>
            </div>
            <div className="profileleft">
              <div className="leftpro">
                <img className="profile" src="https://picsum.photos/152" alt=""/>
              </div>
              <div className="rightpro">
                <p className="defaultblack">Gabrielle Smith</p>
                <p className="defaultsmall">gsmith@ucsd.edu</p>
              </div>
            </div>
          </div>
          <div className="leftbox">
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbKuaTI1Z1Afx" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"/>
            <h2 className="defaultwhite">Follow us on Spotify!</h2>
          </div>
        </div>
        <div className="ritecol">
          <img className="bannerimg" src="https://media1.tenor.com/images/813e28b61264d1794ac6811e4d6d5839/tenor.gif?itemid=18360789" alt=""/>
          <div className="intro">
            <h1 className="header">Welcome to Head in the Clouds!</h1>
            <p className="defaultblack">Head in the Clouds is all about total immersion. There's no better way to really dive deep into ideas!</p>
            <p className="defaultblack">We are the most chill family and the most dedicated to service, shown by our score. Compared to the other families, our innovations are second to none! Scroll down to meet our members.</p>
          </div>
          <div className="members">
            <h1 className="header">Member Bios</h1>
            <div className="memberbio">
              <div className="leftmember">
                <img className="profile" src="https://picsum.photos/150" alt=""/>
                <p className="defaultblack">Jean Campbell</p>
              </div>
              <div className="rightmember">
                <p className="defaultsmall">Hi, my name is Jenn Campbell! I’m a third year majoring in Biology with a minor in Business. I am one of the bigs, and I especially enjoy volunteering at the local hospital.</p>
                <p className="defaultsmall">I enjoy listening to indie pop, hiking local trails, and going to the beach.</p>
              </div>
            </div>
            <div className="memberbio">
              <div className="leftmember">
                <img className="profile" src="https://picsum.photos/151" alt=""/>
                <p className="defaultblack">Andrew Chen</p>
              </div>
              <div className="rightmember">
                <p className="defaultsmall">Hello, I am Andrew Chen. I’m a fourth year Cognitive Science major with a minor in Computer Science. I’ve been a part of Circle K since freshman year and highly recommend joining!</p>
                <p className="defaultsmall">I enjoy listening to indie pop, hiking local trails, and going to the beach.</p>
              </div>
            </div>
            <div className="memberbio">
              <div className="leftmember">
                <img className="profile" src="https://picsum.photos/152" alt=""/>
                <p className="defaultblack">Gabrielle Smith</p>
              </div>
              <div className="rightmember">
                <p className="defaultsmall">Hey y’all, I am Gabby! I’m a third year Environmental Systems major. Despite only joining last year, I think Circle K has become a big part of my life.</p>
                <p className="defaultsmall">I enjoy listening to country music, hiking local trails, and going to the beach.</p>
              </div>
            </div>
            <div className="memberbio">
              <div className="leftmember">
                <img className="profile" src="https://picsum.photos/153" alt=""/>
                <p className="defaultblack">Shruti Mehta</p>
              </div>
              <div className="rightmember">
                <p className="defaultsmall">Hi, I’m Shruti! I’m a second year Political Science major. Despite only joining last year, I think Circle K has become a big part of my life.</p>
                <p className="defaultsmall">I enjoy listening to country music, hiking local trails, and going to the beach.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HeadintheClouds;