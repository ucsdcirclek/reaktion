import "./Resources.css";
import React from 'react';


function Resources () {
    return (
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

    );
}

export default Resources;