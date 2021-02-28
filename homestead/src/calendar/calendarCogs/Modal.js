import React, {useEffect} from 'react';
import firebase from "firebase";
import db from "../../firebase";

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  maxheight: '50px',
  zIndex: 1000,
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose, key, endtime, starttime, title, description, list, docID, veryNewList }) {
  function addPerson() {
    let pid = firebase.auth().currentUser.uid;
    let updateList = db.collection("posts").doc(docID);
    list.push(pid);
    updateList.update({list: list});
  }


  if (!open) return null
  return (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <p>{title}</p>
        <p>{starttime} - {endtime}</p>
        <p>{description}</p>
        <p>People Going: {veryNewList}</p>
        <button onClick={addPerson}>RVSP Now!</button>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  )
}
