import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal.js";
import "./EntryEvent.css";
import firebase from "firebase";
import db from "../../firebase";

function EntryEntry({ docID, title, starttime, endtime, occupancy, location, description, list, category, userList }) {
  /*Firestore records input type time as military so this converts military time to regular*/
  let beginTime = String(starttime).substring(0, 2);
  if (parseInt(beginTime) > 12) {
    beginTime = (beginTime - 12) + "p";
  } else {
    beginTime = (beginTime - 0) + "a";
  }

  let lastTime = String(endtime).substring(0, 2);
  if (parseInt(lastTime) > 12) {
    lastTime = (lastTime - 12) + "p";
  } else {
    lastTime = (lastTime - 0) + "a";
  }

  /*This sets css elements to create pop-up when a button is pressed*/
  const[isOpen, setIsOpen] = useState(false);

  /*Checks if user is already RSVP'd and Logged In*/
  const isListed = useRef(false);
  const[catchError, setCatchError] = useState("");
  const[initialLogged, setInitialLogged] = useState("notLoggedIn");

  /*Checks if user is already RSVP'd and Logged In*/
  /*Create Prop that reads if user is logged in!*/
  useEffect(() => {
    try {
      let pid = firebase.auth().currentUser.uid;
      for (var i = 0; i < list.length; i++) {
        if (list[i] === pid) {
          isListed.current = true;
        }
      }
      setInitialLogged("LoggedIn");
      setCatchError("");
    } catch(error) {
      setInitialLogged("notLoggedIn");
      setCatchError("Please login to RSVP");
      isListed.current = false;
    }
  }, [isOpen]);

  /*Adds a person's ID to the list*/
  function addPerson() {
    try {
      list.push(firebase.auth().currentUser.uid);
      userList.push(firebase.auth().currentUser.displayName);
      db.collection("posts").doc(docID).update({  userList: userList, list: list  });
      isListed.current = true;
    } catch(error) {
    }
  }

  /*Deletes all current user's ID from list*/
  function deletePerson() {
    let pid = firebase.auth().currentUser.uid;
    for (var i = 0; i < list.length; i++) {
      if (list[i] === pid) {
        list.splice(i, 1);
        userList.splice(i, 1);
      }
    }
    db.collection("posts").doc(docID).update({ userList: userList, list: list});
    isListed.current = false;
  }

  return (
    <div className={category}>
      <div className="entryEvent">
        <button onClick={() => setIsOpen(true)}>{beginTime}-{lastTime} {title}</button>
          <Modal
            id="modal"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            catchError={catchError}
            isListed={isListed.current}
            addPerson={addPerson}
            deletePerson={deletePerson}
            initialLogged={initialLogged}
            title={title}
            starttime={starttime}
            endtime={endtime}
            occupancy={occupancy}
            location={location}
            description={description}
            userList={userList}
         />
       </div>
    </div>
  );
}
export default EntryEntry;
