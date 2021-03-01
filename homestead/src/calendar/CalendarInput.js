import React, { useState, useEffect } from 'react';
import "./CalendarInput.css";
import firebase from "firebase";
import db from "../firebase";
import Select from "react-select";

function CalendarInput({ pid }) {
  /*Input things into the database*/
  const[startTime, setStartTime] = useState("");
  const[endTime, setEndTime] = useState("");
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  const[todayDate, setTodayDate] = useState("");
  const[location, setLocation] = useState("");
  const[occupancy, setOccupancy] = useState("");
  const[category, setCategory] = useState("service");

  const[titleError, setTitleError] = useState("Title");
  const[descriptionError, setDescriptionError] = useState("Description");
  const[locationError, setLocationError] = useState("Location");
  const[occupancyError, setOccupancyError] = useState("Maximum Number of People");

  const options = [
    {value: "service", label: "Service"},
    {value: "social", label: "Social"},
    {value: "committee", label: "Committee"},
    {value: "kiwanis", label: "Kiwanis"},
    {value: "fundraising", label: "Fundraising"},
    {value: "division/district", label: "Division/District"}
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    // some clever db stuff
    if (startTime != "" && endTime != "" && title != "" && description != "" && todayDate != "" && location != "") {

      db.collection("posts").add({
        date: todayDate,
        endtime: endTime,
        starttime: startTime,
        title: title,
        location: location,
        description: description,
        list: [pid],
        categories: category,
        occupancy: occupancy

        //when get back need to actually add values to respective fields
      })

      setStartTime("");
      setEndTime("");
      setTitle("");
      setDescription("");
      setTodayDate("");
      setLocation("");
      setOccupancy("");
    //  setType("");

      setTitleError("Title");
      setDescriptionError("Description");
      setLocationError("Location");
      setOccupancyError("Maximum Number of People");
    } else {

      setTitleError("Please fill out Title field.");
      setDescriptionError("Please fill out Description field.");
      setLocationError("Please fill out Location field.");
      setOccupancyError("Please fill out Occupancy field.")
    }
  };

  function onChangeInput(value) {
    let awesomeItem = Object.values(value);
    setCategory(awesomeItem[0]);
  }

  return (
    <div className='calendarInput'>
    <h2>Create an Event!</h2>
    <form className='calendarInput_form'>
      <Select options={options} onChange={onChangeInput}/>
      <div className='calendarInput_time'>
        <h2>Start Time: </h2>
        <input
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          type="time"
          className="input" />
      </div>
      <div className='calendarInput_time'>
        <h2>End Time: </h2>
        <input
          value={endTime}
          onChange={e => setEndTime(e.target.value)}
          type="time"
          className="input"  />
      </div>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="input"
        placeholder={titleError} />
      <input
        value={occupancy}
        onChange={e => setOccupancy(e.target.value)}
        className="input"
        type="number"
        placeholder={occupancyError} />
      <input
        value={location}
        onChange={e => setLocation(e.target.value)}
        className="input"
        placeholder={locationError}  />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        type="text"
        className="input_large"
        placeholder={descriptionError} />
      <input
        value={todayDate}
        onChange={e => setTodayDate(e.target.value)}
        type="date"
        className="input"/>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
    </div>
  );
}

export default CalendarInput;
