import React, { useState, useEffect } from "react";
import EntryEvent from "./EntryEvent.js";
import "./Entry.css";
import firebase from "firebase";
import db from "../../firebase";

function Entry({ number, shiftIndex, daysOfMonth, month, year }) {
  /*This is responsible for calculating the date to match with firestore*/
  let awesomeMonth = month + 1;
  if (awesomeMonth < 10) {
    awesomeMonth = "0" + awesomeMonth;
  } else {
    awesomeMonth = awesomeMonth;
  }
  let awesomeNumber = 0;
  if ((parseInt(number)) < 10) {
    awesomeNumber = "0" + (parseInt(number) - 1);
  }  else {
    awesomeNumber = (parseInt(number) - 1);
  }
  let awesomeDate = year + "-" + awesomeMonth + "-" + awesomeNumber;

  /*Responsible for grabbing from the database a specific date depending on the month*/
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").where("date", "==", awesomeDate).onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, [month]);

  if (number <= shiftIndex) {
    return(<div></div>);
  } else if (number <= shiftIndex + daysOfMonth) {
    return (
      <div className="entry">
        <p className="entry_number">{number - shiftIndex}</p>
        {posts.map((post) => (
          <EntryEvent
            docID = {post.id}
            title = {post.data.title}
            starttime = {post.data.starttime}
            endtime = {post.data.endtime}
            occupancy = {post.data.occupancy}
            location = {post.data.location}
            description = {post.data.description}
            list = {post.data.list}
            category = {post.data.categories}
          />
        ))}
      </div>
    );
  } else { return (<div></div>); }
}

export default Entry;
