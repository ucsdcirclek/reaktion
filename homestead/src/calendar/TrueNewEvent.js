import React, { useState, useRef } from "react";
import NewEventModule from "./NewEventModule.js";
import "./TrueNewEvent.css";

function TrueNewEvents({ userList, title, starttime, endtime, occupancy, location, description, category, list, pid, date, docID}) {
  let presentDate = Date();

  const abbreviatedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const parseMonth = presentDate.substring(4, 7);

  let eventDate = date.substring(5, 7);
  let eventIndex = parseInt(eventDate);

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

  if (isValid.current === true) {
    return (
      <div className={category}>
        <h1>{title}</h1>
        <p><b>Date:</b> {date}</p>
        <p><b>Time:</b> {starttime} - {endtime}</p>
        <p><b>Maximum Occupancy:</b> {occupancy}</p>
        <p><b>Location:</b> {location}</p>
        <p>{description}</p>
        <p><b>Whos Going?</b> {userList}</p>
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
