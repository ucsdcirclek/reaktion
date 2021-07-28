import React, { useState, useRef } from "react";
import NewEventModule from "./NewEventModule.js";
import "./TrueNewEvent.css";

const raw_date = new Date().getMonth();
const raw_year = new Date().getFullYear();

function TrueNewEvents({ userList, title, starttime, endtime, occupancy, location, description, category, list, pid, date, docID}) {
  const eventDate = parseInt(date.substring(5,7)) - 1;
  const eventYear = parseInt(date.substring(0,4));
  var lastMonth;
  if (raw_date === 0) {
    lastMonth = raw_date + 11;
  } else {
    lastMonth = raw_date - 1;
  }
  var nextMonth;
  if (raw_date === 11) {
    nextMonth = raw_date - 11;
  } else {
    nextMonth = raw_date + 1;
  }

  /*This sets css elements to create pop-up when a button is pressed*/
  const[isOpen, setIsOpen] = useState(false);
  const isValid = useRef(false);
  const isHost = useRef(false);

  for (var i = 0; i < list.length; i++) {
    if (list[i] === pid) {
        isValid.current = true;
      break;
    }
  }

  if (list[0] === pid) {
    isHost.current = true;
  }

  category = category + "1";

  let protoList = userList.slice(0);
  for (var i = 0; i < protoList.length; i++) {
    protoList[i] = String(protoList[i]) + ", ";
  }

  if (isValid.current === true && (eventDate === nextMonth || eventDate === raw_date || eventDate === lastMonth) && eventYear === raw_year) {
    return (
      <div className={category}>
        <h1>{title}</h1>
        <p><b>Date:</b> {date}</p>
        <p><b>Time:</b> {starttime} - {endtime}</p>
        <p><b>Maximum Occupancy:</b> {occupancy}</p>
        <p><b>Location:</b> {location}</p>
        <p>{description}</p>
        <p><b>Whos Going?</b> {protoList}</p>
        {isHost.current ? (
          <div className="button_class">
            <button onClick={() => setIsOpen(true)}>Edit Event</button>
            <NewEventModule
              open={isOpen}
              onClose={() => setIsOpen(false)}
              oldTitle={title}
              oldStarttime={starttime}
              oldEndtime={endtime}
              oldOccupancy={occupancy}
              oldLocation={location}
              oldDescription={description}
              oldDate={date}
              docID={docID}
              oldCategory={category}
            />
          </div>
        ):(
          <div></div>
        )}
      </div>
    );
  } else {
    return null;
  }

}

export default TrueNewEvents;
