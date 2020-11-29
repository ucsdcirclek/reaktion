import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
