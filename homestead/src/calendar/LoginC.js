import React, { useState, useEffect, useRef } from "react";
import CalendarInput from "./CalendarInput.js";
import MyEvents from "./MyEvents.js";
import "./LoginC.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import db from "../firebase";

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
};

function LoginC() {
  const[signedIn, setSignedIn] = useState(false);
  const[priority, setPriority] = useState(false);
  const onMount = useRef(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setSignedIn(!!user);
    });

    return () => unregisterAuthObserver();
  }, []);

  if (signedIn === true) {
    db.collection("users").doc(firebase.auth().currentUser.uid).get().then(documentSnapshot => {
      try {setPriority(documentSnapshot.data().priority)}
      catch(err) {}
    })
    let user_id = firebase.auth().currentUser.uid
    db.collection("users").doc(user_id).set({
      name: firebase.auth().currentUser.displayName,
    }, {merge: true})
  }




  /*Future hour tracking that will eventually be added*/
  /*componentDidUpdate = () => {
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
        myevents: ""
      }, {merge: true})

      db.collection("users").doc(user_id).get().then(documentSnapshot => {
        this.setState({isPrio: documentSnapshot.data().priority})
      })
    } else {
      console.log("not logged in")
    }
  }*/

  if (!signedIn) {
    return (
      <div className="loginC">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div className="loginC">
      <div className="loginC_total">
        <div className="loginC_signout">
          <h2>Welcome {firebase.auth().currentUser.displayName}!</h2>
          <img alt="profile" src={firebase.auth().currentUser.photoURL} />
          <button onClick={()=>firebase.auth().signOut()}>Sign Out!</button>
          <CalendarInput className="loginC_input" pid={firebase.auth().currentUser.uid} name={firebase.auth().currentUser.displayName} priority={priority}/>
          <h2> Profiles Coming Soon! </h2>
        </div>
        <div className="loginC_entry">
          <h1>My Events</h1>
          <MyEvents className="loginC_myEvents" pid={firebase.auth().currentUser.uid}/>
        </div>
      </div>
    </div>
  );
}

export default LoginC;
