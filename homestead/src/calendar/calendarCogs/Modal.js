import React from 'react';
import "./Modal.css";
import CloseIcon from '@material-ui/icons/CancelOutlined';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '25px',
  maxheight: '100px',
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


export default function Modal({ open, onClose, catchError, isListed, isDriver, addPerson, deletePerson, initialLogged, title, starttime, endtime, occupancy, location, description, userList, driverList, addDriver, deleteDriver }) {
  /*Firestore records input type time as military so this converts military time to regular*/
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

  let protoList = userList.slice(0);
  for (var i = 0; i < protoList.length; i++) {
    protoList[i] = String(protoList[i]) + ", ";
  }

  let gasList = driverList.slice(0);
  for (var i = 0; i < driverList.length; i++) {
    gasList[i] = String(gasList[i]) + ", ";
  }

  if (!open) return null
  return (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES} className="modal_styles">
        <div className="modal_upper">
          <h1>{title}</h1>
          <CloseIcon onClick={onClose} className="modal_closeIcon"/>
        </div>
        <h2>{beginTime} - {lastTime}</h2>
        <div className="modal_rsvp1">
          <h2><b>Location:</b> {location}</h2>
        </div>
        <div className="modal_rsvp2">
          <h2>Max Occupancy:</h2>
          <h3>{occupancy}</h3>
        </div>
        <p>{description}</p>
        <div className="modal_rsvp3">
          <h2>Whos Going:</h2>
          <p>{protoList}</p>
        </div>
        <div className="modal_rsvp3">
          <h2>Drivers:</h2>
          <p>{gasList}</p>
        </div>
        {(isListed === false) ? (
          <button className={initialLogged} onClick={addPerson}>RSVP Now!</button>
        ):(
          <button className={initialLogged} onClick={deletePerson}>unRSVP</button>
        )}
        {(isDriver === false) ? (
          <button className={initialLogged} onClick={addDriver}>Become a Driver!</button>
        ):(
          <button className={initialLogged} onClick={deleteDriver}>Cancel Driving</button>
        )}
        <p>{catchError}</p>
      </div>
    </div>
  )
}
