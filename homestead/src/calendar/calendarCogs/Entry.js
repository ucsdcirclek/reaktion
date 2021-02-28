import React, { useState, useEffect } from "react";
import EntryEvent from "./EntryEvent.js";
import "./Entry.css";
import firebase from "firebase";
import db from "../../firebase";

function Entry({ number, shiftIndex, daysOfMonth, month, year }) {
  /*month returns the index of the month*/
  /*year returns the entire year*/
  let awesomeMonth = month + 1;
  if (awesomeMonth < 10) {
    awesomeMonth = "0" + awesomeMonth;
  } else {
    awesomeMonth = awesomeMonth;
  }

  let awesomeNumber = 0;
  if ((parseInt(number)) < 10) {
    awesomeNumber = "0" + (parseInt(number) - 1);
  }
  else {
    awesomeNumber = (parseInt(number) - 1);
  }
  let awesomeDate = year + "-" + awesomeMonth + "-" + awesomeNumber;

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").where("date", "==", awesomeDate).onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  if (number <= shiftIndex) {
    return(<div></div>);
  } else if (number <= shiftIndex + daysOfMonth) {
    return (
      <div className="entry">
        <p className="entry_number">{number - shiftIndex}</p>
        {posts.map((post) => (
          <EntryEvent
            docID = {post.id}
            key={post.data.id}
            endtime = {post.data.endtime}
            starttime = {post.data.starttime}
            title = {post.data.title}
            description = {post.data.description}
            list = {post.data.list}
          />
        ))}
      </div>
    );
  } else { return (<div></div>); }
}

export default Entry;
