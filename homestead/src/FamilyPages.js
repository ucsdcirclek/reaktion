import React from 'react'
import './FamilyPages.css'
import Playlist from './images/Playlistsun.png'
import Footer from './Footer.js'
import db from './firebase'
import firebase from 'firebase'
import { useState, useEffect, useRef } from 'react'

// I got Firebase to store email images when user signs-in. firebase.auth().currentUser.photoURL came in handy, thanks for the suggestion Jerome!
// It creates a new user document, need to work on updating info in an existing user document.
// Suggestion: create input field where users can upload description and update it in Firebase.
// Question: Are we going to manually assign users their information or are they going to input it and we update it in Firebase?

function FamilyPages ({
  avatar,
  title,
  sidePicture,
  welcoming,
  message,
  family
}) {
  // Used to store users of a specific family
  const [user, setUser] = useState([])

  // Big button underline state
  const [bigUnderline, setBigUnderline] = useState('none')

  // Little button underline state
  const [littleUnderline, setLittleUnderline] = useState('none')

  // Big button state
  const [stateBig, setStateBig] = useState(0)

  // Little button state
  const [stateLittle, setStateLittle] = useState(0)

  useEffect(() => {
    // Conditionally get users of a specific family
    if (family == 'BreathOfTheSun') {
      db.collection('users')
        .where('family', '==', 'BreathOfTheSun')
        .onSnapshot(snapshot =>
          setUser(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        )
    }
    if (family == 'FarmersOverFlowers') {
      db.collection('users')
        .where('family', '==', 'FarmersOverFlowers')
        .onSnapshot(snapshot =>
          setUser(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        )
    }
    if (family == 'WhiteLotus') {
      db.collection('users')
        .where('family', '==', 'WhiteLotus')
        .onSnapshot(snapshot =>
          setUser(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        )
    }
    if (family == 'HeadInTheClouds') {
      db.collection('users')
        .where('family', '==', 'HeadInTheClouds')
        .onSnapshot(snapshot =>
          setUser(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        )
    }
  }, [])

  // Turn on big if selected first
  function setInitialStateBig () {
    if (stateLittle == 0 && stateBig == 0) {
      setBigUnderline('underline')
      setStateBig(1)
    }
  }

  // Turn on small if selected first
  function setInitialStateLittle () {
    if (stateLittle == 0 && stateBig == 0) {
      setLittleUnderline('underline')
      setStateLittle(1)
    }
  }

  // Change big underline based on state
  function changeStateBig () {
    // if little is currently on, turn off and set state to 0
    if (stateLittle == 1) {
      setLittleUnderline('none')
      setStateLittle(0)
      setBigUnderline('underline')
      setStateBig(1)
    }
    // if big is on, do nothing
    if (stateBig == 1) {
      return
    }
  }

  // Change little underline based on state
  function changeStateLittle () {
    // if big state is on, turn off and set state to 0
    if (stateBig == 1) {
      setBigUnderline('none')
      setStateBig(0)
      setLittleUnderline('underline')
      setStateLittle(1)
    }
    // if small is on, do nothing
    else {
      return
    }
  }

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
              {console.log(user)}
              <button
                style={{ textDecoration: bigUnderline }}
                className='bigLittleButton'
                onClick={() => {
                  setInitialStateBig()
                  changeStateBig()
                }}
              >
                BIGS
              </button>
              <button
                style={{ textDecoration: littleUnderline }}
                className='bigLittleButton'
                onClick={() => {
                  setInitialStateLittle()
                  changeStateLittle()
                }}
              >
                LITTLES
              </button>
            </div>

            {user.map(users => {
              if (stateBig == 0 && stateLittle == 0) {
                return (
                  <BigLittleBios
                    name={users.data.name}
                    email={users.data.email}
                    image={users.data.image}
                  />
                )
              }
              if (stateBig == 1) {
                if (users.data.position === 1) {
                  return (
                    <BigLittleBios
                      name={users.data.name}
                      image={users.data.image}
                      email={users.data.email}
                    />
                  )
                }
              } else if (stateLittle == 1) {
                if (users.data.position === 0) {
                  return (
                    <BigLittleBios
                      name={users.data.name}
                      image={users.data.image}
                      email={users.data.email}
                    />
                  )
                }
              }
            })}
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
            <MemberBios
              name={users.data.name}
              description={users.data.description}
              image={users.data.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

// Card Component for member bios
const MemberBios = ({ name, description, image }) => {
  return (
    <div className='memberFive'>
      <div className='enclosedFive'>
        <img src={image} alt='Family Picture' className='mPhotoFive' />
        <h1>{name}</h1>
      </div>
      <div className='descriptionFive'>
        <h2>{description}</h2>
      </div>
    </div>
  )
}

// Card Component for Bigs and Littles
const BigLittleBios = ({ name, image, email }) => {
  return (
    <div className='nameOne'>
      <img src={image} alt='Family Picture' className='photo' />
      <div className='nameEmail'>
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
    </div>
  )
}

export default FamilyPages
