import React from 'react';
import FbWidget from './FbWidget.js';
import Family from './Family.js';
import Tenent from './Tenent.js';
import Footer from './Footer.js';
import './Home.css';
import ReactPlayer from 'react-player';
import service from './images/Service.png';
import leadership from './images/Leadership.png';
import fellowship from './images/Fellowship.png';

function Home() {
  return (
    <div className="home">
      <h2 className="home_header">UCSD Circle K Home</h2>
      <div className="home_upper">
        <div className="home_upperleft">
          <div className="home_propagandaBubble">
            <h2>Welcome to Circle K</h2>
            <p>This is literally the best organization on campus! Feel free to explore the
            website to learn more about us! If you have any questions contact a board member
            or family head. For any concerns about the website please contact Jerome Lam.
            Want to hang out online? Join our Discord! Want to join? First register an account
            and then fill out the appliction!</p>
          </div>
          <div className="home_propagandaVideo">
            <ReactPlayer
              className="welcomeBar_welcomeVideo"
              width="480"
              height="270px"
              controls
              url='https://www.youtube.com/watch?v=7D_sK6KqeI4'
            />
          </div>
        </div>
      <FbWidget />
      </div>
      <div className="home_families">
        <Family image="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" title="Head in the Clouds"/>
        <Family image="https://lh5.googleusercontent.com/proxy/4xI8Vi5Sb58GadDn-s2L96mnav9K0QMcLJNCKRmqdFO7wG9yXSaSDw9m6PWD4OsJoCmFFuai51un_PHIx0hUizxxTpqJnOgz4kDAWEGO3lXafk_FUDVqZDe1h34=w1200-h630-p-k-no-nu" title="White Lotus"/>
        <Family image="https://i.pinimg.com/736x/0b/fb/3f/0bfb3fb2e2239635a4819b353829d7d2.jpg" title="Farmers over Flowers"/>
        <Family image="https://wallpapercave.com/wp/wp5244984.jpg" title="Breath of the Sun"/>
      </div>
      <div className="home_tenents">
        <Tenent image={service} title='Service'/>
        <Tenent image={leadership} title='Leadership'/>
        <Tenent image={fellowship} title='Fellowship'/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
