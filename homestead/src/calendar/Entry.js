import React from "react";
import "./Entry.css";

function Entry({ number, shiftIndex, daysOfMonth }) {
  if (number <= shiftIndex) {
    return(<div></div>);
  } else if (number <= shiftIndex + daysOfMonth) {
    return (
      <div className='entry'>
        <p className='entry_number'>{number - shiftIndex}</p>
      </div>
    );
  } else { return (<div></div>); }
}

export default Entry;
