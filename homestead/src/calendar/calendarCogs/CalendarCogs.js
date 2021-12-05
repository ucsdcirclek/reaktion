import React, { useState } from "react";
import Entry from "./Entry.js";
import "./CalendarCogs.css";
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeftSharp';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRightSharp';

/*Constants we need for the Days*/
const fullDate = new Date();
const fullPresent = fullDate.getDate();
let shiftIndex = fullDate.getDay();

/*Constants we need for the Months*/
const fullMonths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const monthIndex = fullDate.getMonth();

/*Constants we need for Years*/
const fullYear = fullDate.getFullYear();

function CalendarCogs() {
  /*Creates a shift for the present Month*/
  let startingShift = Math.abs(((shiftIndex + 7) - ((fullPresent % 7) - 1)) % 7);

  const [year, setYear] = useState(fullYear);
  const [index, setIndex] = useState(monthIndex);
  const [shift, setShift] = useState(startingShift);

  function decrementIndex() {
    /*Decrements after function ends*/
    setIndex(prevIndex => prevIndex - 1);
    if (index === 0) {
      setIndex(prevIndex => prevIndex + 12);
      setYear(prevYear => prevYear - 1);
    }

    /*Calculates the Future Index*/
    let futureIndex = index - 1;
    if (futureIndex == -1) {
      futureIndex = 11;
    }

    /*Determines if Current Year is Leap Year*/
    let leapYear = 28;
    if (year % 4 === 0) {
      leapYear = 29;
    }
    const daysPerMonth = [31, leapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    setShift(prevShift => ((42 + (prevShift - daysPerMonth[futureIndex])) % 7));
  }

  function incrementIndex() {
    /*Increments after function ends*/
    setIndex(prevIndex => prevIndex + 1);
    if (index == 11) {
      setIndex(prevIndex => prevIndex - 12);
      setYear(prevYear => prevYear + 1);
    }

    /*Determines if Current Year is Leap Year*/
    let leapYear = 28;
    if (year % 4 === 0) {
      leapYear = 29;
    }
    const daysPerMonth = [31, leapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    setShift(prevShift => (prevShift + daysPerMonth[index]) % 7);
  }

  /*Determines if Current Year is Leap Year*/
  let leapYear = 28;
  if (year % 4 === 0) {
    leapYear = 20;
  }
  const daysPerMonths = [31, leapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (
    <div className="calendarCogs">
      <div className="calendarCogs_months">
        <h1>{fullMonths[index]} {year}</h1>
        <div className="calendarCogs_monthSwitch">
          <ArrowLeftIcon className="calendarCogs_monthIcon_left" onClick={decrementIndex}/>
          <ArrowRightIcon className="calendarCogs_monthIcon_right" onClick={incrementIndex}/>
        </div>
      </div>

      <div className="calendar_lower">
        <div className="calendar_categories">
          <span class="dot" style={{ backgroundColor: "#FFF2A8" }}><h1 className="calendar_categoriesService">Service</h1></span>
          <span class="dot" style={{ backgroundColor: "#BFDAE1" }}><h1 className="calendar_categoriesCommittee">Committee</h1></span>
          <span class="dot" style={{ backgroundColor: "#EAD8D9" }}><h1 className="calendar_categoriesSocial">Social</h1></span>
          <span class="dot" style={{ backgroundColor: "#DAD0E9" }}><h1 className="calendar_categoriesFundraising">Fundraising</h1></span>
          <span class="dot" style={{ backgroundColor: "#BCD5C8" }}><h1 className="calendar_categoriesKiwanis">Kiwanis</h1></span>
          <span class="dot" style={{ backgroundColor: "#D7C6B1" }}><h1 className="calendar_categoriesDivision">Division/District</h1></span>
          <span class="dot" style={{ backgroundColor: "#EAA5A5" }}><h1 className="calendar_categoriesLeadership">Leadership</h1></span>
        </div>
      <table className="calendarCogs_calendar">
        <tbody>
        <tr>
          <th className="calendarCogs_days">SUN</th>
          <th className="calendarCogs_days">MON</th>
          <th className="calendarCogs_days">TUE</th>
          <th className="calendarCogs_days">WED</th>
          <th className="calendarCogs_days">THU</th>
          <th className="calendarCogs_days">FRI</th>
          <th className="calendarCogs_days">SAT</th>
        </tr>
        <tr className="calendarCogs_week">
          <th><Entry number="1" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="2" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="3" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="4" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="5" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="6" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="7" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
        </tr>
        <tr className="calendarCogs_week">
          <th><Entry number="8" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="9" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="10" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="11" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="12" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="13" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="14" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
        </tr>
        <tr className="calendarCogs_week">
          <th><Entry number="15" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="16" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="17" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="18" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="19" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="20" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="21" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
        </tr>
        <tr className="calendarCogs_week">
          <th><Entry number="22" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="23" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="24" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="25" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="26" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="27" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="28" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
        </tr>
        <tr className="calendarCogs_week"> 
          <th><Entry number="29" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="30" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="31" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="32" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="33" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="34" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="35" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
        </tr>
        <tr className="calendarCogs_week">
          <th><Entry number="36" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="37" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="38" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="39" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="40" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="41" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
          <th><Entry number="42" shiftIndex={shift} daysOfMonth={daysPerMonths[index]} month={index} year={year}/></th>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default CalendarCogs;
