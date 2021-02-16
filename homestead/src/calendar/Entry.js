import React from "react";
import "./Entry.css";

function Entry({ number, shiftIndex, daysOfMonth }) {
  if (number <= shiftIndex) {
    return(<div></div>);
  } else if (number <= shiftIndex + daysOfMonth) {
    return (
      <button className='entry'>
        {number - shiftIndex}
      </button>
    );
  } else { return (<div></div>); }
}

export default Entry;
