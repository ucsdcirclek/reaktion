import React from 'react'
import './FamilyPages.css'
import Playlist from './images/Playlistsun.png'
import Footer from './Footer.js'
import db from './firebase'
import { useState, useEffect, useRef } from 'react'

// name footer for organz.

// Questions to ask Jerome:
// Should we make separate pages for each family or just have one file and take in props?

// Props rename: fmaily or something. Just have one file that takes in props

// Does Firebase store images? For the member bios, how would we map through the data if it doesn't store images for a 
// specific user? Is it better to just manually create each card?

// It cannot, sorry Khiem. Check Firebase database to see ( maybe)
// firebase.auth().currentUser.photoURL is what sets the email profile pic, unless another way where users add their own profile pic
// look up to store images on firebase, cmon Jerome

function FamilyPages ({ avatar, title, sidePicture, welcoming, message }) {
  const [user, setUser] = useState([])

  useEffect(() => {
    db.collection('users')
      .where('family', '==', 'BreathoftheSun')
      .onSnapshot(snapshot =>
        setUser(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      )
  }, [])

  console.log({ user })

  return (
    <div className='props'>
      <div className='finalFooter'>
        <div className='twoSidebar'>
          <div className='sidebar'>
            <img src={avatar} alt='Family Picture' className='fam_photo' />
            <h1>{title}</h1>
            <div className='numbers'>
              <div className='service'>
                <h2>0.0</h2>
                <h3>Service</h3>
              </div>

              <div className='fellowship'>
                <h2>0.0</h2>
                <h3>Fellowship</h3>
              </div>

              <div className='leadership'>
                <h2>0.0</h2>
                <h3>Leadership</h3>
              </div>
            </div>

            <div className='bigsLil'>
              <h4>BIGS</h4>
              <h5>LITTLES</h5>
            </div>

            <div className='nameOne'>
              <img
                src='https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg'
                alt='Family Picture'
                className='photo'
              />
              <div className='nameEmail'>
                <h1>Name</h1>
                <h2>email@ucsd.edu</h2>
              </div>
            </div>

            <div className='nameTwo'>
              <img
                src='https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg'
                alt='Family Picture'
                className='photoTwo'
              />
              <div className='nameEmailTwo'>
                <h1>Name</h1>
                <h2>email@ucsd.edu</h2>
              </div>
            </div>

            <div className='nameThree'>
              <img
                src='https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg'
                alt='Family Picture'
                className='photoThree'
              />
              <div className='nameEmailThree'>
                <h1>Name</h1>
                <h2>email@ucsd.edu</h2>
              </div>
            </div>
          </div>

          <div className='extra'>
            <img
              src={Playlist}
              alt='Breathe of the Playlist'
              className='playlist'
            />
            <h1>Follow us on Spotify</h1>
          </div>
        </div>

        <div className='secondBar'>
          <img src={sidePicture} alt='Flowers' className='flowers' />
          <div className='welcome'>
            <h1>{welcoming}</h1>
          </div>

          <div className='bio'>
            <h1>{message}</h1>
          </div>

          <div className='memberBio'>
            <h1>Member Bios</h1>
          </div>

          {user.map(users => (
            <Card name={users.data.name} description={users.data.description} />
          ))}

          {/*
          <div className='memberOne'>
            <div className='enclosedOne'>
              <img
                src='https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg'
                alt='Family Picture'
                className='mPhotoOne'
              />
              <h1>Jenn Campbell</h1>
            </div>
            <div className='description'>
              <h2>
                Hi, my name is Jenn Campbell! I’m a third year majoring in
                Biology with a minor in Business. I am one of the bigs in White
                Lotus, and I especially enjoy volunteering at the local
                hospital. I enjoy listening to indie pop, hiking local trails,
                and going to the beach.
              </h2>
            </div>
          </div>

          <div className='memberTwo'>
            <div className='enclosedTwo'>
              <img
                src='https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg'
                alt='Family Picture'
                className='mPhotoTwo'
              />
              <h1>Jenn Campbell</h1>
            </div>
            <div className='descriptionTwo'>
              <h2>
                Hi, my name is Jenn Campbell! I’m a third year majoring in
                Biology with a minor in Business. I am one of the bigs in White
                Lotus, and I especially enjoy volunteering at the local
                hospital. I enjoy listening to indie pop, hiking local trails,
                and going to the beach.
              </h2>
            </div>
          </div>

          <div className='memberThree'>
            <div className='enclosedThree'>
              <img
                src='https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg'
                alt='Family Picture'
                className='mPhotoThree'
              />
              <h1>Jenn Campbell</h1>
            </div>
            <div className='descriptionThree'>
              <h2>
                Hi, my name is Jenn Campbell! I’m a third year majoring in
                Biology with a minor in Business. I am one of the bigs in White
                Lotus, and I especially enjoy volunteering at the local
                hospital. I enjoy listening to indie pop, hiking local trails,
                and going to the beach.
              </h2>
            </div>
          </div>

          <div className='memberFour'>
            <div className='enclosedFour'>
              <img
                src='https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg'
                alt='Family Picture'
                className='mPhotoFour'
              />
              <h1>Jenn Campbell</h1>
            </div>
            <div className='descriptionFour'>
              <h2>
                Hi, my name is Jenn Campbell! I’m a third year majoring in
                Biology with a minor in Business. I am one of the bigs in White
                Lotus, and I especially enjoy volunteering at the local
                hospital. I enjoy listening to indie pop, hiking local trails,
                and going to the beach.
              </h2>
            </div>
          </div>

          <div className='memberFive'>
            <div className='enclosedFive'>
              <img
                src='https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg'
                alt='Family Picture'
                className='mPhotoFive'
              />
              <h1>Jenn Campbell</h1>
            </div>
            <div className='descriptionFive'>
              <h2>
                Hi, my name is Jenn Campbell! I’m a third year majoring in
                Biology with a minor in Business. I am one of the bigs in White
                Lotus, and I especially enjoy volunteering at the local
                hospital. I enjoy listening to indie pop, hiking local trails,
                and going to the beach.
              </h2>
            </div>
          </div>
          */}
        </div>
      </div>

      <Footer />
    </div>
  )
}

// Card Component for member bios
const Card = ({ name, description }) => {
  return (
    <div className='memberFive'>
      <div className='enclosedFive'>
        <img
          src='https://i.pinimg.com/originals/36/3f/63/363f63d90dbe7de5d8290b341085dff3.jpg'
          alt='Family Picture'
          className='mPhotoFive'
        />
        <h1>{name}</h1>
      </div>
      <div className='descriptionFive'>
        <h2>{description}</h2>
      </div>
    </div>
  )
}

export default FamilyPages;
