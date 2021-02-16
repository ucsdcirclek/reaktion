import React, { Component } from 'react';
import './Login.css';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "./firebase";

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
          <span>
            <div className='login_signout'>
            <h1>Signed In!</h1>
            <button onClick={()=>firebase.auth().signOut()}>Sign Out!</button>
            </div>
            <div className='login_entry'>
            </div>
          </span>
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
