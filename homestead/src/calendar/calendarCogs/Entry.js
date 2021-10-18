import React, { useState, useEffect } from "react";
import EntryEvent from "./EntryEvent.js";
import "./Entry.css";
import db from "../../firebase";

function Entry({ number, shiftIndex, daysOfMonth, month, year }) {
  /*Calculates the date associated with the Calendar Cell to match firestore*/
  month = month + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let numberIndex = parseInt(number) - shiftIndex;
  if (parseInt(numberIndex) < 10) {
    numberIndex = "0" + (parseInt(numberIndex));
  }
  let date = year + "-" + month + "-" + numberIndex;


  /*Grabs from the database a specific depending on date*/
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").where("date", "==", date).onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, [month]);

  if (number <= shiftIndex) {
    return(<div></div>);
  } else if (number <= shiftIndex + daysOfMonth) {
    return (
      <div className="entry">
        <p className="entry_number">{number - shiftIndex}</p>
        <div className="entry_list">
          {posts.map((post) => (
            <EntryEvent
              userList = {post.data.userList}
              docID = {post.id}
              title = {post.data.title}
              starttime = {post.data.starttime}
              endtime = {post.data.endtime}
              occupancy = {post.data.occupancy}
              location = {post.data.location}
              description = {post.data.description}
              list = {post.data.list}
              category = {post.data.categories}
              drivers = {post.data.drivers}
              driverList = {post.data.driverList}
            />
          ))}
        </div>
      </div>
    );
  } else { return (<div></div>); }
}

export default Entry;
