import React from "react";
import CalendarCogs from "./calendarCogs/CalendarCogs.js";
import LoginC from "./LoginC.js";
import Footer from "../Footer.js";
import "./Calendar.css";

function Calendar() {
  return (
    <div className="calendar">
      <CalendarCogs/>
      <LoginC className="calendar_login"/>
      <Footer />
    </div>
  );
}

export default Calendar;
