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
            or family head. For any concerns about the website please contact our Tech Chair.
            Want to hang out online? Join our <a href="https://discord.gg/CMmeMUYNzK">Discord! </a>
            Want to join? First register an account and then fill out the appliction!</p>
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
        <Family image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aab9a42b-4e91-4401-9be5-7daa7fb5013a/daqqs1n-569dc135-49b4-467c-ac6a-d0c0c6699e54.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWFiOWE0MmItNGU5MS00NDAxLTliZTUtN2RhYTdmYjUwMTNhXC9kYXFxczFuLTU2OWRjMTM1LTQ5YjQtNDY3Yy1hYzZhLWQwYzBjNjY5OWU1NC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.h5reVPqJlaXJ8gu2zFEu4BJXsKth9bNrWaxWVJFPwAM" title="White Lotus"/>
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
