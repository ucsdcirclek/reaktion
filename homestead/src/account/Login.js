import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import db, { auth } from "../firebase";

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
};

function Login() {
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
      setPriority(documentSnapshot.data().priority)
    })
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
  if (signedIn) {
    return (
      <div className="login">
        <span>
          <div className="login_signout">
            <h2>Welcome {firebase.auth().currentUser.displayName}!</h2>
            <img alt="profile picture" src={firebase.auth().currentUser.photoURL} />
            <h3>Go to our Calendar to sign up for events!</h3>
            <button onClick={()=>firebase.auth().signOut()}>Sign Out!</button>
            </div>
        </span>
      </div>
    );
  } else {
    return (
      <div className="login">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}

export default Login;
