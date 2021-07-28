import React from 'react';
import "./Props.css"
import Playlist from "./images/Playlistsun.png"
import Footer from "./Footer.js"


// name footer for organz.

function Props({avatar, title, sidePicture, welcoming, message}) {
  return (
    <div className = "props">
      <div className="finalFooter">
        <div className="twoSidebar">
          
          <div className = "sidebar">
            <img src={avatar} alt="Family Picture" className="fam_photo"/>
            <h1>{title}</h1>
            <div className="numbers">
              <div className="service">
                <h2 >0.0</h2>
                <h3>Service</h3>
              </div>

              <div className="fellowship">
                <h2>0.0</h2>
                <h3>Fellowship</h3>
              </div>

              <div className="leadership">
                <h2>0.0</h2>
                <h3>Leadership</h3>
              </div>
            </div>

            <div className="bigsLil">
                <h4>BIGS</h4>
                <h5>LITTLES</h5>
            </div>

            <div className="nameOne">
              <img src="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" alt="Family Picture" className="photo"/>
                <div className="nameEmail">
                  <h1>Name</h1>
                  <h2>email@ucsd.edu</h2>
                </div>
            </div>

            <div className="nameTwo">
              <img src="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" alt="Family Picture" className="photoTwo"/>
                <div className="nameEmailTwo">
                  <h1>Name</h1>
                  <h2>email@ucsd.edu</h2>
                </div> 
            </div>

            <div className="nameThree">
              <img src="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" alt="Family Picture" className="photoThree"/>
                <div className="nameEmailThree">
                  <h1>Name</h1>
                  <h2>email@ucsd.edu</h2>
                </div>
            </div>
          </div>
      
          <div className="extra">
            <img src={Playlist} alt="Breathe of the Playlist" className="playlist"/>
            <h1>Follow us on Spotify</h1>
          </div>
        </div>




        <div className="secondBar">

          <img src={sidePicture} alt="Flowers" className="flowers"/>
            <div className="welcome">
              <h1>{welcoming}</h1>
            </div>

            <div className="bio">
              <h1>{message}</h1>
            </div>


            <div className="memberBio">
              <h1>Member Bios</h1>
            </div>

            <div className="memberOne">
              <div className="enclosedOne">
                <img src="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" alt="Family Picture" className="mPhotoOne"/>
                <h1>Jenn Campbell</h1>
              </div>
                <div className="description">
                  <h2>Hi, my name is Jenn Campbell! I’m a third year majoring in Biology with a minor in Business. 
                    I am one of the bigs in White Lotus, and I especially enjoy volunteering at the local hospital. 
                    I enjoy listening to indie pop, hiking local trails, and going to the beach.</h2>
                </div>
            </div>

            <div className="memberTwo">
              <div className="enclosedTwo">
                <img src="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" alt="Family Picture" className="mPhotoTwo"/>
                <h1>Jenn Campbell</h1>
              </div>
                <div className="descriptionTwo">
                  <h2>Hi, my name is Jenn Campbell! I’m a third year majoring in Biology with a minor in Business. 
                    I am one of the bigs in White Lotus, and I especially enjoy volunteering at the local hospital. 
                    I enjoy listening to indie pop, hiking local trails, and going to the beach.</h2>
                </div>
            </div>

            <div className="memberThree">
              <div className="enclosedThree">
                <img src="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" alt="Family Picture" className="mPhotoThree"/>
                <h1>Jenn Campbell</h1>
              </div>
                <div className="descriptionThree">
                  <h2>Hi, my name is Jenn Campbell! I’m a third year majoring in Biology with a minor in Business. 
                    I am one of the bigs in White Lotus, and I especially enjoy volunteering at the local hospital. 
                    I enjoy listening to indie pop, hiking local trails, and going to the beach.</h2>
                </div>
            </div>

            <div className="memberFour">
              <div className="enclosedFour">
                <img src="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" alt="Family Picture" className="mPhotoFour"/>
                <h1>Jenn Campbell</h1>
              </div>
                <div className="descriptionFour">
                  <h2>Hi, my name is Jenn Campbell! I’m a third year majoring in Biology with a minor in Business. 
                    I am one of the bigs in White Lotus, and I especially enjoy volunteering at the local hospital. 
                    I enjoy listening to indie pop, hiking local trails, and going to the beach.</h2>
                </div>
            </div>

            <div className="memberFive">
              <div className="enclosedFive">
                <img src="https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg" alt="Family Picture" className="mPhotoFive"/>
                <h1>Jenn Campbell</h1>
              </div>
                <div className="descriptionFive">
                  <h2>Hi, my name is Jenn Campbell! I’m a third year majoring in Biology with a minor in Business. 
                    I am one of the bigs in White Lotus, and I especially enjoy volunteering at the local hospital. 
                    I enjoy listening to indie pop, hiking local trails, and going to the beach.</h2>
                </div>
            </div>
            

        </div>


      </div>
      

      <Footer />
    </div>
   
  
  );
}

export default Props;
