import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import "./NewEventModule.css";
import db from "../firebase";
import Select from "react-select";

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  maxheight: '50px',
  zIndex: 1000,
}

//Work on Later?
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function NewEventModule({ open, onClose, docID, oldTitle, oldEndtime, oldStarttime, oldOccupancy, oldDescription, oldLocation, oldDate, oldCategory }) {
  /*Firestore records input type time as military so this converts military time to regular*/
  const[startTime, setStartTime] = useState(oldStarttime);
  const[endTime, setEndTime] = useState(oldEndtime);
  const[title, setTitle] = useState(oldTitle);
  const[description, setDescription] = useState(oldDescription);
  const[todayDate, setTodayDate] = useState(oldDate);
  const[location, setLocation] = useState(oldLocation);
  const[occupancy, setOccupancy] = useState(oldOccupancy);
  const[category, setCategory] = useState(oldCategory);

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
    {value: "division", label: "Division/District"}
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    // some clever db stuff
    try {
      if (startTime !== "" && endTime !== "" && title !== "" && description !== "" && todayDate !== "" && location !== "" && category !== "") {
        db.collection("posts").doc(docID).update({
          date: todayDate,
          endtime: endTime,
          starttime: startTime,
          title: title,
          location: location,
          description: description,
          categories: category,
          occupancy: occupancy
        })

        onClose();
      } else {

        setTitleError("Please fill out Title field.");
        setDescriptionError("Please fill out Description field.");
        setLocationError("Please fill out Location field.");
        setOccupancyError("Please fill out Occupancy field.")
      }
    } catch(error) {
      console.log("error")
    }
  };

  function onChangeInput(value) {
    let awesomeItem = Object.values(value);
    setCategory(awesomeItem[0]);
  }



  if (!open) return null
  return (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES} className="modal_styles1">
      <CloseIcon onClick={onClose} className="modal_closeIcon1"/>
      <h2>Edit my Event!</h2>
      <form className='calendarInput_form1'>
        <Select options={options} onChange={onChangeInput}/>
        <div className='calendarInput_time1'>
          <h2>Start Time: </h2>
          <input
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            type="time"
            className="input1" />
        </div>
        <div className='calendarInput_time1'>
          <h2>End Time: </h2>
          <input
            value={endTime}
            onChange={e => setEndTime(e.target.value)}
            type="time"
            className="input1"  />
        </div>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="input1"
          placeholder={titleError} />
        <input
          value={occupancy}
          onChange={e => setOccupancy(e.target.value)}
          className="input1"
          type="number"
          min="1"
          placeholder={occupancyError} />
        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="input1"
          placeholder={locationError}  />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"
          className="input_large1"
          placeholder={descriptionError} />
        <input
          value={todayDate}
          onChange={e => setTodayDate(e.target.value)}
          type="date"
          className="input1"/>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      </div>
    </div>
  )
}
