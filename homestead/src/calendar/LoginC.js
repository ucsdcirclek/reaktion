import React, { Component } from "react";
import CalendarInput from "./CalendarInput.js";
import MyEvents from "./MyEvents.js";
import "./LoginC.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import db, { auth } from "../firebase";

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

  componentDidUpdate = () => {
    if (this.state.isSignedIn) {
      let user_id = firebase.auth().currentUser.uid
      db.collection("users").doc(user_id).set({
        name: firebase.auth().currentUser.displayName,
        serviceHours: 0,
        socialHours: 0,
        committeeHours: 0,
        kiwanisHours: 0,
        fundraisingHours: 0,
        divisionHours: 0,
        priority: 1,
        myevents: ""
      })
    } else {
      console.log("not logged in")
    }
  }

  render() {
    return (
      <div className="login">
        {this.state.isSignedIn ? (
            <div className="login_total">
              <div className="login_signout">
                <h2>Welcome {firebase.auth().currentUser.displayName}!</h2>
                <img alt="profile picture" src={firebase.auth().currentUser.photoURL} />
                <button onClick={()=>firebase.auth().signOut()}>Sign Out!</button>
                <CalendarInput className="login_input" pid={firebase.auth().currentUser.uid} name={firebase.auth().currentUser.displayName}/>
              </div>
              <div className="login_entry">
                <MyEvents className="login_myEvents"/>
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
