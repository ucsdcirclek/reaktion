import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import db, {auth} from "../firebase";
//import { doc, setDoc } from "firebase/firestore"; 
import "./Profile.css"; 


function Profile() {
  const[signedIn, setSignedIn] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [gradyear, setYear] = useState("202X");
  const [major, setMajor] = useState(""); 
  const[priority, setPriority] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // db.collection('user')
    // .add({
    //   firstname: fname,
    //   lastname: lname,
    //   gradyear: gradyear,
    //   major: major
    // })
    db.collection("users").doc(firebase.auth().currentUser.uid).get().then(documentSnapshot => {
      try {setPriority(documentSnapshot.data().priority)}
      catch(err) {}
    })
    let user_id = firebase.auth().currentUser.uid
    
    alert(gradyear);
    // db.collection("users").document(user_id).updateData({
    //   firstName: fname,
    //   lastName: lname,
    //   gradyear: gradyear,
    //   major: major
    // })


    db.collection("users").doc(user_id).set({
      name: firebase.auth().currentUser.displayName,
      firstname: fname,
      lastname: lname,
      gradyear: gradyear,
      major: major,
    }, {merge: true})
    // var userRef = db.collection("users").doc(user_id)
    // alert(userRef);
    // userRef.updateData({
    //   firstname: fname,
    //   lastname: lname,
    //   gradyear: gradyear,
    //   major: major,
    // })
    .then(() => {
      alert("Profile has been updated")
    })
    .catch(error => {
      alert(error);
    });
    // setDoc(doc(db, "users", user_id), {
    //   firstname: fname,
    //   lastname: lname,
    //   gradyear: gradyear,
    //   major: major,
    // });

    // db.collection('users').doc(user_id).set(
    //   { sharedWith: [{
    //     firstName: fname, 
    //     lastName: lname,
    //     gradYear: gradyear,
    //     major: major} ] },
    //   { merge: true }
    // )
    


  };

  // if (signedIn === true) {
  //   db.collection("users").doc(firebase.auth().currentUser.uid).get().then(documentSnapshot => {
  //     try {setPriority(documentSnapshot.data().priority)}
  //     catch(err) {}
  //   })
  //   let user_id = firebase.auth().currentUser.uid
  //   db.collection("users").doc(user_id).set({
  //     name: firebase.auth().currentUser.displayName,
  //   }, {merge: true})
  // }

  return (
    <div className="body">
      <div className="leftcolumn">
        <img alt="profile" src={firebase.auth().currentUser.photoURL} />
        <label>Email</label>
        <p>email@ucsd.edu</p>
        <label>Family</label>
        <p>Head in the clouds</p>
      </div>

      <div className="rightcolumn">
        <form className="form" onSubmit={handleSubmit}> 

          <div className = "row">
            <div className="entry">
              <label>First Name</label>
              <input 
                type="text" 
                placeholder="First Name"
                name="first_name" 
                id="first_name" 
                value={fname}
                onChange = {(e) => setFName(e.target.value)}
              />
            </div>

            <div className="entry">
              <label>Last Name</label>
              <input 
                type="text"
                placeholder="Last Name" 
                name="last_name" 
                id="last_name"
                value={lname}
                onChange = {(e) => setLName(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="entry">
              <label>Graduation Year</label>
              <input 
                type="text" 
                placeholder="Graduation Year"
                name="grad_year" 
                id="grad_year"
                value={gradyear}
                onChange = {(e) => setYear(e.target.value)}
              />
            </div>

            <div className="entry">
              <label>Major</label>
              <input 
                type="text" 
                placeholder="Major"
                name="major" 
                id="major"
                value={major}
                onChange = {(e) => setMajor(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" id="update_button">Update</button>
        </form>
        <div id="bio">
          <label>Bio</label>
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
      </div>
    </div>
  );
}
// const Profile = () => {

//   const [fname, setFName] = useState("");
//   const [lname, setLName] = useState("");
//   const [gradyear, setYear] = useState("");
//   const [major, setMajor] = useState("");
//   const[priority, setPriority] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // db.collection('user')
//     // .add({
//     //   firstname: fname,
//     //   lastname: lname,
//     //   gradyear: gradyear,
//     //   major: major
//     // })
//     db.collection("users").doc(firebase.auth().currentUser.uid).get().then(documentSnapshot => {
//       try {setPriority(documentSnapshot.data().priority)}
//       catch(err) {}
//     })
//     let user_id = firebase.auth().currentUser.uid
//     db.collection("users").doc(user_id).set({
//       name: firebase.auth().currentUser.displayName,
//       firstName: fname,
//       lastName: lname,
//       gradyear: gradyear,
//       major: major,
//     }, {merge: true})

//     .then(() => {
//       alert("Profile has been updated")
//     })
//     .catch(error => {
//       alert(error);
//     });

//     setFName('');
//     setLName('');
//     setYear('');
//     setMajor('');
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}> 
//       <label>First Name</label>
//       <input 
//         type="text" 
//         placeholder="First Name"
//         name="first_name" 
//         id="first_name" 
//         value={fname}
//         onChange = {(e) => setFName(e.target.value)}
//       />

//       <label>Last Name</label>
//       <input 
//         type="text"
//         placeholder="Last Name" 
//         name="last_name" 
//         id="last_name"
//         value={lname}
//         onChange = {(e) => setLName(e.target.value)}
//       />

//       <label>Graduation Year</label>
//       <input 
//         type="text" 
//         placeholder="Graduation Year"
//         name="grad_year" 
//         id="grad_year"
//         value={gradyear}
//         onChange = {(e) => setYear(e.target.value)}
//       />

//       <label>Major</label>
//       <input 
//         type="text" 
//         placeholder="Major"
//         name="major" 
//         id="major"
//         value={major}
//         onChange = {(e) => setMajor(e.target.value)}
//       />

//       <button type="submit">Update</button>
//     </form>
//   );
// };

export default Profile;