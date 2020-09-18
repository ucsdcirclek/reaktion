import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCteNUgd09tUWNYeaPEn7meNR-SzdwmgQ0",
    authDomain: "reaktion-4f443.firebaseapp.com",
    databaseURL: "https://reaktion-4f443.firebaseio.com",
    projectId: "reaktion-4f443",
    storageBucket: "reaktion-4f443.appspot.com",
    messagingSenderId: "288213449957",
    appId: "1:288213449957:web:16aca123e2fd1fde63280c",
    measurementId: "G-B25G1MPX53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
