import React, { Component } from 'react';
import CalendarInput from './CalendarInput.js';
import './Login0.css';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "../firebase";

export default class Login extends Component {
  state={isSignedIn:false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
    })
  }

  render() {
    return (
      <div className='login'>
        {this.state.isSignedIn ? (
            <div className='login_total'>
              <div className='login_signout'>
                <h2>Welcome {firebase.auth().currentUser.displayName}!</h2>
                <img alt="profile picture" src={firebase.auth().currentUser.photoURL} />
                <button onClick={()=>firebase.auth().signOut()}>Sign Out!</button>
                <div className='login_entry'>
                  <CalendarInput/>
                </div>
              </div>
            </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}
