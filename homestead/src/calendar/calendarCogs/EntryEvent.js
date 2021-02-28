import React, { useState } from "react";
import Modal from "./Modal.js";
import "./EntryEvent.css";
import firebase from "firebase";
import db from "../../firebase";

function EntryEntry({ key, endtime, starttime, title, description, list, docID }) {
  let beginTime = String(starttime).substring(0, 2);
  if (parseInt(beginTime) > 12) {
    beginTime = (beginTime - 12) + "p";
  } else {
    beginTime = beginTime + "a";
  }

  let lastTime = String(endtime).substring(0, 2);
  if (parseInt(lastTime) > 12) {
    lastTime = (lastTime - 12) + "p";
  } else {
    lastTime = lastTime + "a";
  }

  const[isOpen, setIsOpen] = useState(false)
  var veryNewList = [];

  function listMaker() {
    setIsOpen(true)
    let newList = Object.values(list);
    for (var i = 0; i < newList.length; i++) {
      db.collection("users").doc(newList[i]).get().then((doc) => {
        let listItem = doc.data().getString("name")
        veryNewList.append(listItem)
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    }
  }

  return (
    <div className='entryEvent'>
      <button onClick={listMaker}>{beginTime}-{lastTime} {title}</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}
       key={key}
       starttime = {starttime}
       endtime = {endtime}
       title = {title}
       list = {list}
       docID = {docID}
       veryNewList = {veryNewList}
    />
    </div>
  );
}
export default EntryEntry;
