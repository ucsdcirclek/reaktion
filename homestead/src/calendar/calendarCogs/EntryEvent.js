import React, { useState, useEffect } from "react";
import Modal from "./Modal.js";
import "./EntryEvent.css";
import firebase from "firebase";
import db from "../../firebase";

function EntryEntry({ docID, title, starttime, endtime, occupancy, location, description, list, category }) {
  /*firestore stores times as military so this converts this back to regular*/
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

  /*this is responsible for the pop-up when a button is pressed*/
  const[isOpen, setIsOpen] = useState(false)

  const[catchError, setCatchError] = useState("");
  const[isListed, setIsListed] = useState(false);

  function addPerson() {
    try {
      let pid = firebase.auth().currentUser.uid;
      let updateList = db.collection("posts").doc(docID);
      list.push(pid);
      updateList.update({list: list});
      setIsListed(true);
      setCatchError("");
    } catch(error) {
      setCatchError("Please Login to RSVP");
    }
  }

  /*if person is already listed and wants to unRSVP*/
  /*for some reason doesn't delete first person of list neat*/
  function deletePerson() {
    setIsListed(false);
    let pid = firebase.auth().currentUser.uid;
    let updateList = db.collection("posts").doc(docID);
    for (var i = 0; i < list.length; i++) {
      if (list[i] == pid) {
        list.splice(i, 1)
      }
    updateList.update({list: list});
    }
  }



  /*this is responsible for the decoding list of participants*/
  var veryNewList = [];
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let newList = Object.values(list);
    for (var i = 0; i < newList.length; i++) {
      db.collection("users").doc(newList[i]).onSnapshot((doc) => {
        veryNewList.push((doc.data().name) + ", ");
      });
    }
    setUsers(veryNewList)
  }, []);


  return (
    <div className={category}>
      <div className="entryEvent">
        <button onClick={() => setIsOpen(true)}>{beginTime}-{lastTime} {title}</button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          catchError={catchError}
          isListed={isListed}
          addPerson={addPerson}
          deletePerson={deletePerson}
          title={title}
          starttime={starttime}
          endtime={endtime}
          occupancy={occupancy}
          location={location}
          description={description}
          list={list}
          veryNewList={users}
       />
       </div>
    </div>
  );
}
export default EntryEntry;
