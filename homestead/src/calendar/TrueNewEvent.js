import React, { useState, useEffect } from "react";
import NewEventModule from "./NewEventModule.js";
import "./TrueNewEvent.css";

function TrueNewEvents({ userList, title, starttime, endtime, occupancy, location, description, category, list, pid, date, docID}) {
  var startingIndex;
  let presentDate = Date();

  const abbreviatedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const parseMonth = presentDate.substring(4, 7);
  for (var i = 0; i < 12; i++) {
    if (abbreviatedMonths[i] == parseMonth) {
      startingIndex = i + 1;
    }
  }

  let eventDate = date.substring(5, 7);
  let eventIndex = parseInt(eventDate);


  /*This sets css elements to create pop-up when a button is pressed*/
  const[isOpen, setIsOpen] = useState(false)

  //works!
  for (var i = 0; i < list.length; i++) {
    if (list[i] == pid && (eventIndex == startingIndex || eventIndex == startingIndex-1 || eventIndex == startingIndex+1)) {
      return (
        <div className={category}>
          <p>{title}</p>
          <p>{starttime} - {endtime}</p>
          <p>{occupancy}</p>
          <p>{location}</p>
          <p>{description}</p>
          <p>{userList}</p>
          <p>{date}</p>

          {(list[0] == pid) ? (
            <div>
              <button onClick={() => setIsOpen(true)}>Edit Event</button>
              <NewEventModule
                open={isOpen}
                onClose={() => setIsOpen(false)}

              />
            </div>
          ):(
            <div></div>
          )}
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default TrueNewEvents;
