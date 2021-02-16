import React, { useState } from 'react';
import Entry from './Entry.js';
import Login from './Login0.js';
import './Calendar.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import firebase from "firebase";
import db from "../firebase";

function Calendar() {
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

  /*Creates the shift needed for the calendar*/
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const parseDay = date.substring(0, 3);
  for (var i = 0; i < 7; i++) {
    if (daysOfWeek[i] == parseDay) {
      shiftIndex = i;
    }
  }

  /*Gives us current day of the month*/
  const parsePresent = parseInt(date.substring(7, 10));

  /*This shows what day it is if there were to be no shift*/
  let startingShift = Math.abs((shiftIndex + 1) - (parsePresent % 7));

  /*Adds One or Subtracts One from Index to Get New Month*/
  /*Adds One or Subtracts One from Year*/
  /*Note that the acutal value of index, year, shift doesn't change until after the function is completed*/
  const [index, setIndex] = useState(startingIndex);
  const [year, setYear] = useState(parseYear);
  const [shift, setShift] = useState(startingShift);
  function decrementIndex() {
    let lastIndex = 0;
    lastIndex = index - 1;
    if (lastIndex == -1) {
      lastIndex = 11;
    }
    setIndex(prevIndex => prevIndex - 1);
    if (index == 0) {
      setIndex(prevIndex => prevIndex + 12);
      setYear(prevYear => prevYear - 1);
    }
    /*Shows If Current Year Is Leap Year*/
    let fLeapYear = 'Error';
    if (year % 4 != 0) {
      fLeapYear = 28;
    }
    else {
      fLeapYear = 29;
    }
    const fdaysPerMonths = [31, fLeapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    /*Creates a shift I guess*/
    setShift(prevShift => (42 + (prevShift - fdaysPerMonths[lastIndex])) % 7)
  }

  function incrementIndex() {
    setIndex(prevIndex => prevIndex + 1);
    if (index == 11) {
      setIndex(prevIndex => prevIndex - 12);
      setYear(prevYear => prevYear + 1);
    }
    /*Shows If Current Year Is Leap Year*/
    let fLeapYear = 'Error';
    if (year % 4 != 0) {
      fLeapYear = 28;
    }
    else {
      fLeapYear = 29;
    }
    const fdaysPerMonths = [31, fLeapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    /*Creates a shift I guess*/
    setShift(prevShift => (prevShift + fdaysPerMonths[index]) % 7)
  }

  /*Shows If Current Year Is Leap Year*/
  let leapYear = 'Error';
  if (year % 4 != 0) {
    leapYear = 28;
  }
  else {
    leapYear = 29;
  }
  const daysPerMonths = [31, leapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (
    <div className='calendar'>
      <div className='calendar_content'>
        <div className='calendar_months'>
          <ArrowLeftIcon className='calendar_monthIcon' onClick={decrementIndex}/>
          <h1>{fullMonths[index]} {year}</h1>
          <ArrowRightIcon className='calendar_monthIcon' onClick={incrementIndex}/>
        </div>
        <table className='calendar_calendar'>
          <tbody>
            <tr>
              <th className='calendar_calendarDays'>Sunday</th>
              <th className='calendar_calendarDays'>Monday</th>
              <th className='calendar_calendarDays'>Tuesday</th>
              <th className='calendar_calendarDays'>Wednesday</th>
              <th className='calendar_calendarDays'>Thursday</th>
              <th className='calendar_calendarDays'>Friday</th>
              <th className='calendar_calendarDays'>Saturday</th>
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
      <div className='calendarLogin'>
        <Login />
        <h1>Place Holder</h1>
      </div>
    </div>
  );
}

export default Calendar;
