import "./Resources.css";
import React from 'react';
import Family from "./Family.js";

function Resources () {
    return (
        <div>
        <div className="wholePart">
            <div className="leftPart">
    
                <h1> Get to know Circle K! </h1>

                <h2> Service and Chill </h2>

                <p>Whether you're looking for a fun way to meet <br></br>
                 people on a day off or a community to serve, <br></br>
                we've got you covered with a variety of social and <br></br>
                service events for you to try out! 
                </p> 

                <p> Select a calender event and click "guest signup" <br></br>
                 to try out our events!<br></br>
                </p>

                 <button class="button button2"> Calender </button> 

            </div>

            <div className="rightPart">

                <h2> Meet us at our GBMs! </h2>

                <p> Check out our general body meetings to find out <br></br>
                 more about our community. Interact with new <br></br>
                and old members, participate in challenges, win <br></br>
                prizes, and get updates on what we have <br></br>
                planned! </p>

                <p> GBMs occur every Monday at 8pm. Weekly GBM <br></br>
                locations will be posted on our Facebook page.
                </p>

                 <button class="button button1"> Social Media</button>
    
            </div>
        </div>


        <div className="account_mid">
        <h2 className="account_title2">Meet The Circle K Community!</h2>
        <div className="account_text">
          <div className="account_para">
            <div className="home_family">
              <Family image="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" title="Head in the Clouds"/>
              <Family image="https://i.pinimg.com/originals/84/e6/18/84e61804536e07d96ba088ede497d4dc.png" title="White Lotus"/>
            </div>
            <div style={{paddingBottom: "50px"}}/>
            <div className="home_family">
              <Family image="https://c4.wallpaperflare.com/wallpaper/877/604/1005/anime-one-piece-minimalist-monkey-d-luffy-wallpaper-preview.jpg" title="Farmers over Flowers"/>
              <Family image="https://wallpapercave.com/wp/wp5244984.jpg" title="Breath of the Sun"/>
            </div>
          </div>

          <div className="account_cont">
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
              {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3_bsRUbL9lMJQPSjT5Dq0ld20dpxQuzHExiOqe8oJ--WaUA/viewform"><button>Apply Here!</button></a> */}
            </div>
          </div>
        </div>
      </div>
        </div>

    );
}

export default Resources;