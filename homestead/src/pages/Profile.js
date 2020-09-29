import React, { Component } from 'react';
import '../App.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyCteNUgd09tUWNYeaPEn7meNR-SzdwmgQ0 ",
  authDomain: "reaktion-4f443.firebaseapp.com"
})

class Profile extends Component {
  state = {isSignedIn: false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
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
        <div>
          {this.state.isSignedIn ? (
            <span>
              <h1>Signed In!</h1>
              <button onClick = {() => firebase.auth().signOut()}>Sign out!</button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <img alt="profile picture" src={firebase.auth().currentUser.photoURL}/>
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

export default Profile;
