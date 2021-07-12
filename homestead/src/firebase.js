import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbp8lUWPsw4Uq21IYDHhhMgxRUjx_JYew",
  authDomain: "reaktion-dev.firebaseapp.com",
  projectId: "reaktion-dev",
  storageBucket: "reaktion-dev.appspot.com",
  messagingSenderId: "5332363637",
  appId: "1:5332363637:web:f3ae346ba656ca727ccb3c",
  measurementId: "G-0YRQNV5QX2"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
