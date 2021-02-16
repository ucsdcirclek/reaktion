import React, { useState } from 'react';
import "./CalendarInput.css";
import firebase from "firebase";
import db from "../firebase";

function CalendarInput() {
  /*Input things into the database*/
  const[startTime, setStartTime] = useState("");
  const[endTime, setEndTime] = useState("");
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  const[todayDate, setTodayDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // some clever db stuff
    db.collection("posts").add({
      date: todayDate,
      endtime: endTime,
      starttime: startTime,
      title: title,
      description: description
    })

    setStartTime("");
    setEndTime("");
    setTitle("");
    setDescription("");
    setTodayDate("");
  };

  return (
    <div className='calendarInput'>
    <form className='calendarInput_form'>
      <input
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        type="time"
        className="input"
        placeholder={`Start Time: 0:00 a.m.`} />
      <input
        value={endTime}
        onChange={e => setEndTime(e.target.value)}
        type="time"
        className="input"
        placeholder={`End Time: 0:00 a.m.`} />
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="input"
        placeholder={`Title`} />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        type="text"
        className="input"
        placeholder={`Description`} />
      <input
        value={todayDate}
        onChange={e => setTodayDate(e.target.value)}
        type="date"
        className="input"
        placeholder={`Date: 00/00/0000`} />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
    </div>
  );
}

export default CalendarInput;
