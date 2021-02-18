import React, { useState } from "react";
import Entry from "./Entry.js";
import "./CalendarCogs.css";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function CalendarCogs() {
  /*Constants we need for Months*/
  let startingIndex = 0;
  let shiftIndex = 0;
  const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const abbreviatedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  /*Grabs Date*/
  let date = Date();

  /*Grabs Correct Index of Current Month*/
  const parseMonth = date.substring(4, 7);
  for (var i = 0; i < 12; i++) {
    if (abbreviatedMonths[i] == parseMonth) {
      startingIndex = i;
    }
  }

  /*Grabs Integer Value of the Current Year*/
  const parseYear = parseInt(date.substring(11, 15));

  /*Creates the Initial Shift Needed for the Calendar*/
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const parseDay = date.substring(0, 3);
  for (var i = 0; i < 7; i++) {
    if (daysOfWeek[i] == parseDay) {
      shiftIndex = i;
    }
  }

  /*Gives us Current Day of the Month*/
  const parsePresent = parseInt(date.substring(7, 10));
  let startingShift = Math.abs((shiftIndex + 1) - (parsePresent % 7));

  /*Adds One or Subtracts One from Index to Get New Month*/
  /*Adds One or Subtracts One from Year*/
  /*Adds or Subtracts Previous Number of Days to Get Proper Shift*/
  /*Note usestate doesn't change until after the function is complete*/
  const [index, setIndex] = useState(startingIndex);
  const [year, setYear] = useState(parseYear);
  const [shift, setShift] = useState(startingShift);

  function decrementIndex() {
    let lastIndex = 0;
    lastIndex = index - 1;
    if (lastIndex == -1) {
      lastIndex = 11;
    }
    /*Responsible for Month and Year*/
    setIndex(prevIndex => prevIndex - 1);
    if (index == 0) {
      setIndex(prevIndex => prevIndex + 12);
      setYear(prevYear => prevYear - 1);
    }
    /*Determines if Current Year is Leap Year*/
    let lYear = 'Error';
    if (year % 4 != 0) {
      lYear = 28;
    } else {
      lYear = 29;
    }
    const daysPerMonth = [31, lYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    setShift(prevShift => (42 + (prevShift - daysPerMonth[lastIndex])) % 7);
  }

  function incrementIndex() {
    setIndex(prevIndex => prevIndex + 1);
    if (index == 11) {
    setIndex(prevIndex => prevIndex - 12);
    setYear(prevYear => prevYear + 1);
    }
    /*Determines if Current Year is Leap Year*/
    let lYear = 'Error';
    if (year % 4 != 0) {
      lYear = 28;
    } else {
      lYear = 29;
    }
    const daysPerMonth = [31, lYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    setShift(prevShift => (prevShift + daysPerMonth[index]) % 7);
  }

  /*Determines if Current Year is Leap Year*/
  let leapYear = 'Error';
  if (year % 4 != 0) {
    leapYear = 28;
  }
  else {
    leapYear = 29;
  }
  const daysPerMonths = [31, leapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (
    <div className="calendarCogs">
      <div className="calendarCogs_months">
        <ArrowLeftIcon className="calendarCogs_monthIcon" onClick={decrementIndex}/>
        <h1>{fullMonths[index]} {year}</h1>
        <ArrowRightIcon className="calendarCogs_monthIcon" onClick={incrementIndex}/>
      </div>
      <table className="calendarCogs_calendar">
        <tbody>
        <tr>
          <th className="calendarCogs_days">Sunday</th>
          <th className="calendarCogs_days">Monday</th>
          <th className="calendarCogs_days">Tuesday</th>
          <th className="calendarCogs_days">Wednesday</th>
          <th className="calendarCogs_days">Thursday</th>
          <th className="calendarCogs_days">Friday</th>
          <th className="calendarCogs_days">Saturday</th>
        </tr>
        <tr>
          <th><Entry number="1" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="2" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="3" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="4" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="5" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="6" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="7" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
        </tr>
        <tr>
          <th><Entry number="8" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="9" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="10" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="11" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="12" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="13" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="14" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
        </tr>
        <tr>
          <th><Entry number="15" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="16" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="17" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="18" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="19" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="20" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="21" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
        </tr>
        <tr>
          <th><Entry number="22" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="23" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="24" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="25" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="26" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="27" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="28" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
        </tr>
        <tr>
          <th><Entry number="29" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="30" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="31" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="32" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="33" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="34" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="35" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
        </tr>
        <tr>
          <th><Entry number="36" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="37" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="38" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="39" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="40" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="41" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
          <th><Entry number="42" shiftIndex={shift} daysOfMonth={daysPerMonths[index]}/></th>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CalendarCogs;
