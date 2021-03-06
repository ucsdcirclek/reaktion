import React, { useState, useEffect } from "react";
import CalendarCogs from "./calendarCogs/CalendarCogs.js";
import LoginC from "./LoginC.js";
import Footer from "../Footer.js";
import "./Calendar.css";
import firebase from "firebase";
import db from "../firebase";

function Calendar() {
  return (
    <div className="calendar">
      <div className="calendar_categories">
        <div className="calendar_categories1">
          <h1 className="calendar_categoriesService">Service</h1>
          <h1 className="calendar_categoriesSocial">Social</h1>
          <h1 className="calendar_categoriesCommittee">Committee</h1>
        </div>
        <div className="calendar_categories2">
          <h1 className="calendar_categoriesKiwanis">Kiwanis</h1>
          <h1 className="calendar_categoriesFundraising">Fundraising</h1>
          <h1 className="calendar_categroiesDivision">Division/District</h1>
        </div>
        </div>
      <CalendarCogs/>
      <div className="calendar_profile">
        <LoginC className="calendar_login"/>
      </div>
      <Footer />
    </div>
  );
}

export default Calendar;
