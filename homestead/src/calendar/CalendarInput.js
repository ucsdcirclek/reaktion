import React, { useState } from 'react';
import "./CalendarInput.css";
import db from "../firebase";
import Select from "react-select";

function CalendarInput({ pid, name, priority }) {
  /*Input things into the database*/
  const[startTime, setStartTime] = useState("");
  const[endTime, setEndTime] = useState("");
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  const[todayDate, setTodayDate] = useState("");
  const[location, setLocation] = useState("");
  const[occupancy, setOccupancy] = useState("");
  const[category, setCategory] = useState("service");

  const options = [
    {value: "service", label: "Service"},
    {value: "social", label: "Social"},
    {value: "committee", label: "Committee"},
    {value: "kiwanis", label: "Kiwanis"},
    {value: "fundraising", label: "Fundraising"},
    {value: "division", label: "Division/District"},
    {value: "leadership", label: "Leadership"}
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    // some clever db stuff
    db.collection("posts").add({
      date: todayDate,
      endtime: endTime,
      starttime: startTime,
      title: title,
      location: location,
      description: description,
      list: [pid],
      categories: category,
      occupancy: occupancy,
      userList: [name],
      drivers: [],
      driverList: []
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
  };

  function onChangeInput(value) {
    let awesomeItem = Object.values(value);
    setCategory(awesomeItem[0]);
  }

  if (priority === 1) {
    return (
      <div className='calendarInput'>
      <h2>Create an Event!</h2>
      <form className='calendarInput_form' onSubmit={handleSubmit}>
        <Select options={options} onChange={onChangeInput} required/>
        <div className='calendarInput_time'>
          <h2>Start Time: </h2>
          <input
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            type="time"
            className="input"
            required
          />
        </div>
        <div className='calendarInput_time'>
          <h2>End Time: </h2>
          <input
            value={endTime}
            onChange={e => setEndTime(e.target.value)}
            type="time"
            className="input"
            required
          />
        </div>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="input"
          placeholder="Title"
          required
        />
        <input
          value={occupancy}
          onChange={e => setOccupancy(e.target.value)}
          className="input"
          placeholder='Maximum Number of People'
          type="number"
          min="1"
          required
        />
        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="input"
          placeholder="Location"
          required
        />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"
          className="input_large"
          placeholder="Description"
          required
        />
        <input
          value={todayDate}
          onChange={e => setTodayDate(e.target.value)}
          type="date"
          className="input"
          required
        />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  } else {
    return(null);
  }
}

export default CalendarInput;
