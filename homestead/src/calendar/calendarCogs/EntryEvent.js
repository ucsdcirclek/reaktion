import React, { useState, useEffect } from "react";
import Modal from "./Modal.js";
import "./EntryEvent.css";
import firebase from "firebase";
import db from "../../firebase";

function EntryEntry({ key, endtime, starttime, title, description, list, docID }) {
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

  const[isOpen, setIsOpen] = useState(false)
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
    <div className='entryEvent'>
      <button onClick={() => setIsOpen(true)}>{beginTime}-{lastTime} {title}</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}
       key={key}
       starttime = {starttime}
       endtime = {endtime}
       title = {title}
       list = {list}
       docID = {docID}
       description = {description}
       veryNewList = {users}
       />
    </div>
  );
}
export default EntryEntry;
