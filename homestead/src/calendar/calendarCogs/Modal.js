import React, {useEffect, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import "./Modal.css";
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

export default function Modal({ open, onClose, catchError, isListed, addPerson, deletePerson, title, starttime, endtime, occupancy, location, description, list, veryNewList }) {
  /*firestore stores times as military so this converts this back to regular*/
  let beginTime = String(starttime).substring(0, 2);
  let beginMidTime = String(starttime).substring(2, 5);
  if (parseInt(beginTime) > 12) {
    beginTime = (beginTime - 12) + beginMidTime + "pm";
  } else {
    beginTime = (beginTime - 0) + beginMidTime + "am";
  }

  let lastTime = String(endtime).substring(0, 2);
  let lastMidTime = String(endtime).substring(2, 5);
  if (parseInt(lastTime) > 12) {
    lastTime = (lastTime - 12) + lastMidTime + "pm";
  } else {
    lastTime = (lastTime - 0) + lastMidTime + "am";
  }

  /*renders the RSVP buttons!*/
  if (!open) return null
  return (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES} className="modal_styles">
        <CloseIcon onClick={onClose} className="modal_closeIcon"/>
        <h1>{title}</h1>
        <h2>{beginTime} - {lastTime}</h2>
        <div className="modal_rsvp">
          <h2>Maximum Amount of People:</h2>
          <h3>{occupancy}</h3>
        </div>
        <div className="modal_rsvp">
          <h2>Location:</h2>
          <h3>{location}</h3>
        </div>
        <p>{description}</p>
        <div className="modal_rsvp">
          <h2>Whos Going:</h2>
          <p>{veryNewList}</p>
        </div>
        {(isListed == false) ? (
          <button onClick={addPerson}>RSVP Now!</button>
        ):(
          <button onClick={deletePerson}>unRSVP</button>
        )}
        <p>{catchError}</p>
      </div>
    </div>
  )
}
